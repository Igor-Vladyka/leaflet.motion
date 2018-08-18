/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion = L.Motion || {
	Event: {
			Started:"motion-started",
			Paused: "motion-paused",
			Resumed: "motion-resumed",
			Section: "motion-section",
			Ended: "motion-ended",
			GroupStarted: "motion-group-stated",
			GroupPaused: "motion-group-paused",
			GroupResumed: "motion-group-resumed",
			GroupEnded: "motion-group-ended",
			SeqStarted: "motion-seq-stated",
			SeqPaused: "motion-seq-paused",
			SeqResumed: "motion-group-resumed",
			SeqSection: "motion-seq-section",
			SeqEnded: "motion-seq-ended",
		}
	};
L.motion = L.motion || {};
L.Motion.Animate = {
	defaultOptions: {
		pane: "polymotionPane",
		attribution: "Leaflet.Motion © " + (new Date()).getFullYear() + " Igor Vladyka",
		auto: false,
		markerOptions: undefined,
		easing: function(x){ return x; }, // linear
		speed: 50, // KM/s
		duration: 5000
	},

	/**
        @param {Map} map the Leaflet Map
    */
	beforeAdd: function (map) {
		if (!map.getPane(this.options.pane)) {
			map.createPane(this.options.pane).style.zIndex = 499;
		}

		L.Polyline.prototype.beforeAdd.call(this, map);
	},

	/**
        @param {Map} map the Leaflet Map
    */
    onAdd: function (map) {
        L.Polyline.prototype.onAdd.call(this, map);

		if (this.options.auto) {
			this.startMotion();
		}
        return this;
    },

	/**
        @param {Map} map the Leaflet Map
    */
	onRemove: function (map) {
		this.stopMotion();
        L.Polyline.prototype.onRemove.call(this, map);
	},

	/**
        @param {DateTime} startTime time from start animation
    */
    _motion: function (startTime) {
		var ellapsedTime = (new Date()).getTime() - startTime;
        var durationRatio = ellapsedTime / this.options.duration; // 0 - 1
		durationRatio = this.options.easing(durationRatio, ellapsedTime, 0, 1, this.options.duration);

		var nextPoint = L.Motion.Utils.interpolateOnLine(this._map, this._linePoints, durationRatio);

		this.addLatLng(nextPoint.latLng);
		this._drawMarker(nextPoint.latLng);

		if (durationRatio < 1) {
			this.__ellapsedTime = ellapsedTime;
			this.animation = L.Util.requestAnimFrame(function(){
				this._motion(startTime);
			}, this);
		} else {
			this.stopMotion(this._linePoints);
		}
    },

	/**
        @param {LatLng} nextPoint next animation point
    */
	_drawMarker: function (nextPoint) {
		var mo = this.options.markerOptions;
		if (mo) {
			if (!this.__marker) {
				mo.attribution = this.options.attribution;
				this.__marker = L.marker(nextPoint, mo);
				this.__marker.addTo(this._map);
				this.__marker.addEventParent(this);
			} else {
				var m = this.__marker;
				var prevPoint = m.getLatLng();
				var angle = Math.atan2(nextPoint.lat - prevPoint.lat, nextPoint.lng - prevPoint.lng) * 180 / Math.PI;
				if (angle < 0) {
					angle += 360;
				}

				if (this.options.motionMarkerOnLine !== undefined && !isNaN(+this.options.motionMarkerOnLine)) {
					this.options.motionMarkerOnLine = +this.options.motionMarkerOnLine;
					m._icon.children[0].style.transform = "rotate(-" + Math.round(angle + this.options.motionMarkerOnLine) +"deg)";
				}

				m.setLatLng(nextPoint);
			}
		}
	},

	_validateMarker: function () {
		if (this.options.removeMarkerOnEnd && this.__marker) {
			this.__marker.remove();
			this.__marker = null;
		}
	},

    startMotion: function () {
		if (!this.animation) {
			this.fire(L.Motion.Event.Started, this);
			this.setLatLngs([]);
	        this._motion((new Date).getTime());
		}
    },

    stopMotion: function (points) {
		points = points || [];
		this.pauseMotion();
		this.setLatLngs(points);
		this._validateMarker();
		this.__ellapsedTime = null;
		this.fire(L.Motion.Event.Ended, this);
    },

	pauseMotion: function () {
		if (this.animation) {
			L.Util.cancelAnimFrame(this.animation);
			this.animation = null;
			this.fire(L.Motion.Event.Paused, this);
		}
	},

	resumeMotion: function () {
		if (this.__ellapsedTime) {
			this._motion((new Date).getTime() - (this.__ellapsedTime));
			this.fire(L.Motion.Event.Resumed, this);
		}
	},

	toggleMotion: function () {
		if (this.animation) {
			this.pauseMotion();
		} else {
			this.resumeMotion();
		}
	},

	/**
        @param {LatLng[]} collection of coordinates
        @param {Number} speed in KM/s
        @return {Number} duration
    */
	getDuration: function (collection, speed) {
		speed = speed || this.options.speed || this.defaultOptions.speed;
		collection = collection || this._linePoints;
		collection = collection.map(function(m){ return L.Motion.Utils.toLatLng(m); })
		var distance = L.Motion.Utils.distance(collection);
		return distance/speed;
	}
}
