/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion.Seq = L.Motion.Group.extend ({
	_activeLayer: null,
	_started: false,
	_completed: false,

	addLayer: function (l, autostart) {
		if (autostart === undefined) {
			autostart = true;
		}
		this.__prepareLayer(l);
		L.Motion.Group.prototype.addLayer.call(this, l);

		if (!this._activeLayer && autostart && this._completed) {
			l.motionStart();
		}
	},

	/**
		Start first motion in current group;
	*/
	motionStart: function() {
		// We will start animation only when its not running
		if (!this._activeLayer) {
			var layer = this.getFirstLayer();
			if (layer) {
				layer.motionStart();
				this._started = true;
				this._completed = false;
				this.fire(L.Motion.Event.Started, {layer: this}, false);
			}
		}

		return this;
	},

	/**
		Stops all motions in current group;
	*/
	motionStop: function(softstop) {
		if (!softstop) {
			this.invoke("motionStop");
		}
		this._activeLayer = null;
		this._completed = true;
		this.fire(L.Motion.Event.Ended, {layer: this}, false);

		return this;
	},

	/**
		Pause current motion in current group;
	*/
	motionPause: function() {
		if (this._activeLayer) {
			this._activeLayer.motionPause();
			this.fire(L.Motion.Event.Paused, {layer: this}, false);
		}

		return this;
	},

	/**
		Resume last motion in current group;
	*/
	motionResume: function() {
		if (this._activeLayer) {
			this._activeLayer.motionResume();
			this.fire(L.Motion.Event.Resumed, {layer: this}, false);
		}

		return this;
	},

	/**
		Reset all motions in current group;
	*/
	motionToggle: function () {
		if (this._activeLayer) {
			this.motionPause();
		} else {
			this.motionResume();
		}

		return this;
	},

	getFirstLayer: function() {
		var allLayers = this.getLayers();
		return allLayers.length ? allLayers[0] : null;
	},

	/**
		Initialise a layer so it's ready to be part of this motion sequence
	*/
	__prepareLayer: function (l) {
		if (l.setLatLngs) {
			l.setLatLngs([]);
		}

		// When a layer finishes have it remove itself and call motionStart() on the next layer
		l.off(L.Motion.Event.Ended, this.__clearActiveLayer__, this);
		l.on(L.Motion.Event.Ended, this.__clearActiveLayer__, this);

		// When a layer is started (by the last one ending) set it as the active layer
		l.off(L.Motion.Event.Started, this.__putActiveLayer__, this);
		l.on(L.Motion.Event.Started, this.__putActiveLayer__, this);
	},

	/**
		Called by a layer (e.g. one of the sequence events) when it finishes. Is responsible for
		cleaning up after itself and starting the next layer.
	 */
	__clearActiveLayer__: function (e) {
		this._activeLayer = null;
		var layers = this.getLayers();
		var currentId = e.layer._leaflet_id;
		var currentObject = layers.filter(function(f){ return f._leaflet_id == currentId })[0];
		var nextIndex = layers.indexOf(currentObject) + 1;
		if (layers.length > nextIndex) {
			layers[nextIndex].motionStart();
		} else {
			//this.fire(L.Motion.Event.Ended, {layer: this}, false);
			this.motionStop(true);
		}
	},

	/**
		Called by a layer when it's started, sets itself as the active layer on the sequence
		group and trigger any other events which need triggering.
	 */
	__putActiveLayer__: function (e) {
		this._activeLayer = e.layer;
		this.fire(L.Motion.Event.Section, {layer: this._activeLayer}, false);
	}
});

L.motion.seq = function(motion, options){
    return new L.Motion.Seq(motion, options);
};
