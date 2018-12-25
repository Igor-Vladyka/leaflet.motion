/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion.Seq = L.Motion.Group.extend ({
	_activeLayer: null,

	/**
		Start first motion in current group;
	*/
	motionStart: function() {
		var layer = this.getFirstLayer();
		if (layer) {
			this.__prepareStart();
			layer.motionStart();
			this.fire(L.Motion.Event.Started, {layer: this}, false);
		}

		return this;
	},

	/**
		Stops all motions in current group;
	*/
	motionStop: function() {
		this.invoke("motionStop");
		this._activeLayer = null;
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

	__prepareStart: function() {
		var self = this;
		this.getLayers().forEach(function(l){
			l.off(L.Motion.Event.Ended, self.__clearActiveLayer__, self);
			l.on(L.Motion.Event.Ended, self.__clearActiveLayer__, self);

			l.off(L.Motion.Event.Started, self.__putActiveLayer__, self);
			l.on(L.Motion.Event.Started, self.__putActiveLayer__, self);
		});
	},

	__clearActiveLayer__: function (e) {
		this._activeLayer = null;
		var layers = this.getLayers();
		var currentId = e.layer._leaflet_id;
		var currentObject = layers.filter(function(f){ return f._leaflet_id == currentId })[0];
		var nextIndex = layers.indexOf(currentObject) + 1;
		if (layers.length > nextIndex) {
			layers[nextIndex].motionStart();
		} else {
			this.fire(L.Motion.Event.Ended, {layer: this}, false);
		}
	},

	__putActiveLayer__: function (e) {
		this._activeLayer = e.layer;
		this.fire(L.Motion.Event.Section, {layer: this._activeLayer}, false);
	}
});

L.motion.seq = function(motion, options){
    return new L.Motion.Seq(motion, options);
};
