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
	options: {
		pane: "polymotionPane",
		attribution: "Leaflet.Motion © " + (new Date()).getFullYear() + " Igor Vladyka"
	},

	motionOptions: {
		auto: false,
		easing: function(x){ return x; }, // linear
		speed: 0, // KM/H
		duration: 0 // ms
	},

	markerOptions: undefined,

	initialize: function (latlngs, options, motionOptions, markerOptions) {
		L.Util.setOptions(this, options);
		this.motionOptions = L.Util.extend({}, this.motionOptions, motionOptions || {});
		this.markerOptions = L.Util.extend({}, markerOptions || {});

		this._bounds = L.latLngBounds();
		this._linePoints = this._convertLatLngs(latlngs);
		if (!L.LineUtil.isFlat(this._linePoints)) {
			this._linePoints = this._linePoints[0];
		}

		this._latlngs = [];
		L.Util.stamp(this); // Enforce proper animation order;
	},

	addLatLng: function(latLng, ring) {
		latLng = L.Motion.Utils.toLatLng(latLng);
		this._linePoints.push(latLng);
		if (this._latlngs.length) {
			this._latlngs.push(latLng);
		}
		return this;
	},

	/**
        @param {Map} map the Leaflet Map
    */
	beforeAdd: function (map) {
		if (!map.getPane(this.options.pane)) {
			map.createPane(this.options.pane).style.zIndex = 599;
		}

		this._renderer = map.getRenderer(this);
	},

	/**
        @param {Map} map the Leaflet Map
		@return {MotionObject} this
    */
    onAdd: function (map) {
		this._renderer._initPath(this);
		this._reset();
		this._renderer._addPath(this);

		if (this.motionOptions.auto) {
			this.motionStart();
		}

        return this;
    },

	/**
        @param {Map} map the Leaflet Map
    */
	onRemove: function (map) {
		this.motionStop();
		if (this.__marker) {
			map.removeLayer(this.__marker);
		}

		this._renderer._removePath(this);
	},

	/**
        @param {DateTime} startTime time from start animation
    */
    _motion: function (startTime) {
		var ellapsedTime = (new Date()).getTime() - startTime;
        var durationRatio = 1; // 0 - 1
		if (this.motionOptions.duration) {
			durationRatio = ellapsedTime / this.motionOptions.duration;
		}

		if (durationRatio < 1) {
			durationRatio = this.motionOptions.easing(durationRatio, ellapsedTime, 0, 1, this.motionOptions.duration);
			var nextPoint = L.Motion.Utils.interpolateOnLine(this._map, this._linePoints, durationRatio);

			L.Polyline.prototype.addLatLng.call(this, nextPoint.latLng);
			this._drawMarker(nextPoint.latLng);

			this.__ellapsedTime = ellapsedTime;
			this.animation = L.Util.requestAnimFrame(function(){
				this._motion(startTime);
			}, this);
		} else {
			this.motionStop();
		}
    },

	/**
		Draws marker according to line position
        @param {LatLng} nextPoint next animation point
    */
	_drawMarker: function (nextPoint) {
		if (this.markerOptions) {
			if (!this.__marker) {
				this.__marker = L.marker(nextPoint, this.markerOptions);
				this.__marker.addTo(this._map);
				this.__marker.addEventParent(this);
			} else {
				var m = this.__marker;
				var prevPoint = m.getLatLng();
				var angle = Math.atan2(nextPoint.lat - prevPoint.lat, nextPoint.lng - prevPoint.lng) * 180 / Math.PI;
				if (angle < 0) {
					angle += 360;
				}

				if (m._icon.children.length) {
					var needToRotateMarker = m._icon.children[0].getAttribute("motion-base");

					if (needToRotateMarker) {
						var motionMarkerOnLine = 0;
						if (needToRotateMarker && !isNaN(+needToRotateMarker)) {
							motionMarkerOnLine = +needToRotateMarker;
						}

						m._icon.children[0].style.transform = "rotate(-" + Math.round(angle + motionMarkerOnLine) +"deg)";
					}
				}

				m.setLatLng(nextPoint);
			}
		}
	},

	/**
        Removes marker from the map
    */
	_removeMarker: function () {
		if (this.markerOptions && this.markerOptions.removeOnEnd && this.__marker) {
			this.__marker.remove();
			delete this.__marker;
		}
	},

	/**
        Starts animation of current object
    */
	motionStart: function () {
		if (this._map && !this.animation) {
			//this._linePoints = this.getLatLngs();
			if (!this.motionOptions.duration) {
				if (this.motionOptions.speed) {
					this.motionOptions.duration = L.Motion.Utils.getDuration(this._linePoints, this.motionOptions.speed);
				} else {
					this.motionOptions.duration = 0;
				}
			}
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
    motionStop: function () {
		this.motionPause();
		this.setLatLngs(this._linePoints);
		this.__ellapsedTime = null;
		this._removeMarker();
		this.fire(L.Motion.Event.Ended, {layer: this}, false);

		return this;
    },

	/**
        Pauses animation of current object
    */
	motionPause: function () {
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
	motionResume: function () {
		if (!this.animation && this.__ellapsedTime) {
			if (!this.motionOptions.duration) {
				if (this.motionOptions.speed) {
					this.motionOptions.duration = L.Motion.Utils.getDuration(this._linePoints, this.motionOptions.speed);
				} else {
					this.motionOptions.duration = 0;
				}
			}
			this._motion((new Date).getTime() - (this.__ellapsedTime));
			this.fire(L.Motion.Event.Resumed, {layer: this}, false);
		}

		return this;
	},

	/**
        Toggles animation of current object; Start/Pause/Resume;
    */
	motionToggle: function () {
		if (this.animation) {
			if (this.__ellapsedTime) {
				this.motionPause();
			}
		} else {
			if (this.__ellapsedTime) {
				this.motionResume();
			} else {
				this.motionStart();
			}
		}

		return this;
	},

	motionDuration: function (duration) {
		this.motionOptions.duration = duration || 0;
		return this;
	},

	motionSpeed: function (speed) {
		this.motionOptions.speed = speed || 0;
		return this;
	}
}
