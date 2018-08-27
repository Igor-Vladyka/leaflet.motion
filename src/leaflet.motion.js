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
			Ended: "motion-ended"
		}
	};

L.motion = L.motion || {};
L.Motion.Animate = {
	defaultOptions: {
		pane: "polymotionPane",
		attribution: "Leaflet.Motion © " + (new Date()).getFullYear() + " Igor Vladyka",
		auto: false,
		markerOptions: undefined,
		rotateMarker: false,
		easing: function(x){ return x; }, // linear
		speed: 60, // KM/H
		duration: 0
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
		@return {MotionObject} this
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

		if (durationRatio < 1) {
			durationRatio = this.options.easing(durationRatio, ellapsedTime, 0, 1, this.options.duration);
			var nextPoint = L.Motion.Utils.interpolateOnLine(this._map, this._linePoints, durationRatio);

			this.addLatLng(nextPoint.latLng);
			this._drawMarker(nextPoint.latLng);

			this.__ellapsedTime = ellapsedTime;
			this.animation = L.Util.requestAnimFrame(function(){
				this._motion(startTime);
			}, this);
		} else {
			this.stopMotion(this._linePoints);
		}
    },

	/**
		Draws marker according to line position
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

				if (this.options.rotateMarker) {
					var motionMarkerOnLine = 0;
					var baseAttributeValue = m._icon.children[0].getAttribute("motion-base");
					if (baseAttributeValue && !isNaN(+baseAttributeValue)) {
						motionMarkerOnLine = +baseAttributeValue;
					}

					m._icon.children[0].style.transform = "rotate(-" + Math.round(angle + motionMarkerOnLine) +"deg)";
				}

				m.setLatLng(nextPoint);
			}
		}
	},

	/**
        Removes marker from the map
    */
	_removeMarker: function () {
		if (this.options.removeMarkerOnEnd && this.__marker) {
			this.__marker.remove();
			this.__marker = null;
		}
	},

	/**
        Starts animation of current object
        @param {LatLng[]} points initial points to show on the map on starting animation
    */
    startMotion: function (points) {
		if (!this.animation) {
			points = points || [];
			this.setLatLngs([]);
	        this._motion((new Date).getTime());
			this.fire(L.Motion.Event.Started, {layer: this}, false);
		}

		return this;
    },

	/**
        Stops animation of current object
        @param {LatLng[]} points full object points collection or empty collection for cleanup
    */
    stopMotion: function (points) {
		points = points || [];
		this.pauseMotion();
		this.setLatLngs(points);
		this._removeMarker();
		this.__ellapsedTime = null;
		this.fire(L.Motion.Event.Ended, {layer: this}, false);

		return this;
    },

	/**
        Pauses animation of current object
    */
	pauseMotion: function () {
		if (this.animation) {
			L.Util.cancelAnimFrame(this.animation);
			this.animation = null;
			this.fire(L.Motion.Event.Paused, {layer: this}, false);
		}

		return this;
	},

	/**
        Resume animation of current object
    */
	resumeMotion: function () {
		if (!this.animation && this.__ellapsedTime) {
			this._motion((new Date).getTime() - (this.__ellapsedTime));
			this.fire(L.Motion.Event.Resumed, {layer: this}, false);
		}

		return this;
	},

	/**
        Toggles animation of current object; Start/Pause/Resume;
    */
	toggleMotion: function () {
		if (this.animation) {
			if (this.__ellapsedTime) {
				this.pauseMotion();
			}
		} else {
			if (this.__ellapsedTime) {
				this.resumeMotion();
			} else {
				this.startMotion();
			}
		}

		return this;
	}
}
