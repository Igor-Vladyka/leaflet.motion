/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion = L.Motion || { Event: { Started:"started", Ended: "ended" } };
L.motion = L.motion || {};
L.Motion.Animate = {
	defaultOptions: {
		pane: "polymotionPane",
		attribution: "Leaflet.Motion © " + (new Date()).getFullYear() + " Igor Vladyka",
		auto: false,
		easing: function(x){ return x; },// linear
		speed: 50, // km/s
	},

	beforeAdd: function (map) {
		if (!map.getPane(this.options.pane)) {
			map.createPane(this.options.pane).style.zIndex = 499;
		}

        L.Polyline.prototype.beforeAdd.call(this, map);
	},

    onAdd: function (map) {

		if (!this.options.duration) {
			this.options.duration = this.getBaseDistance(this._linePoints) / this.options.speed;
		}

        L.Polyline.prototype.onAdd.call(this, map);

		if (this.options.auto) {
			this.startMotion();
		}

        return this;
    },

	onRemove: function (map) {
		this.stopMotion();
        L.Polyline.prototype.onRemove.call(this, map);
	},

    _motion: function (startTime) {
		var ellapsedTime = (new Date()).getTime() - startTime;
        var durationRatio = ellapsedTime / this.options.duration; // 0 - 1
		durationRatio = this.options.easing(durationRatio, ellapsedTime, 0, 1, this.options.duration);

		var nextPoint = L.Motion.Utils.interpolateOnLine(this._map, this._linePoints, durationRatio);

		//this.getBaseDistance(this.getLatLngs().slice().push(nextPoint.latLng)); // Distance between start point and next point in animation;

		this.addLatLng(nextPoint.latLng);

		/*	var passedPoints = Math.floor(durationRatio * self._linePoints.length);
		var index = self.getLatLngs().length;

		if (durationRatio < 1) {
			var passedPoints = Math.floor(durationRatio * self._linePoints.length);
		} else {
			var passedPoints = self._linePoints.length;
		}

		for (var i = index; i < passedPoints; i++) {
            self.addLatLng(self._linePoints[i]);

            if (self.options.onPoint) {
                self.options.onPoint(self._linePoints[i]);
            }

		}
		*/

		if (durationRatio < 1) {
			L.Util.requestAnimFrame(function(){
				this._motion(startTime);
			}, this);
		} else {
			this.setLatLngs(this._linePoints);
			this.stopMotion();
		}
    },

    startMotion: function () {
		this.fire(L.Motion.Event.Started);
        this._motion((new Date).getTime());
    },

    stopMotion: function () {
		this.fire(L.Motion.Event.Ended);
    },

	getBaseDistance: function (linePoints) {
        var distanceInMeter = 0;
        for (var i = 1; i < linePoints.length; i++) {
            distanceInMeter += linePoints[i].distanceTo(linePoints[i - 1]);
        }

		return distanceInMeter;
    }
}
