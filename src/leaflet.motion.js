/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion = L.Motion || { Event: { Started:"started", Ended: "ended", Section: "section" } };
L.motion = L.motion || {};
L.Motion.Animate = {
	defaultOptions: {
		pane: "polymotionPane",
		attribution: "Leaflet.Motion © " + (new Date()).getFullYear() + " Igor Vladyka",
		auto: false,
		marker: null,
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

	drawMarker: function (nextPoint) {
		var prevPoint = this.options.marker.getLatLng();
		var angle = Math.atan2(nextPoint.lat - prevPoint.lat, nextPoint.lng - prevPoint.lng) * 180 / Math.PI;
		if (angle < 0) {
	        angle += 360;
	    }

		this.options.marker._icon.children[0].style.transform = "rotate(-" + Math.round(angle - 45) +"deg)"
		this.options.marker.setLatLng(nextPoint);
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
    _motion: function (startTime, duration) {
		var ellapsedTime = (new Date()).getTime() - startTime;
        var durationRatio = ellapsedTime / duration; // 0 - 1
		durationRatio = this.options.easing(durationRatio, ellapsedTime, 0, 1, duration);

		var nextPoint = L.Motion.Utils.interpolateOnLine(this._map, this._linePoints, durationRatio);

		this.addLatLng(nextPoint.latLng);

		if (durationRatio < 1) {
			this.animation = L.Util.requestAnimFrame(function(){
				this._motion(startTime, duration);
			}, this);
		} else {
			this.setLatLngs(this._linePoints);
			this.stopMotion();
		}
    },

    startMotion: function () {
		if (!this.animation) {
			this.fire(L.Motion.Event.Started, this);
	        this._motion((new Date).getTime(), this.options.duration);
		}
    },

    stopMotion: function () {
		this.pauseMotion();
		this.setLatLngs([]);
		this.fire(L.Motion.Event.Ended, this);
    },

	pauseMotion: function () {
		if (this.animation) {
			L.Util.cancelAnimFrame(this.animation);
			this.animation = null;
		}
	},

	resumeMotion: function () {
		// TODO: implement resume from last point;
	},

	/**
        @param {String} property property to reduce on
        @return {Number} calculated reduced value
    */
	__reducer: function (property) {
		return function(accumulative, object) {
			return accumulative + object[property];
		};
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
