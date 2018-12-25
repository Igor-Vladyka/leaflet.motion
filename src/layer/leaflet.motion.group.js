/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion.Group = L.FeatureGroup.extend ({
	options: {
		pane: L.Motion.Animate.options.pane,
		attribution: L.Motion.Animate.options.attribution,
	},

	/**
		Starts all motions in current group;
	*/
	motionStart: function () {
		this.invoke("motionStart");
		this.fire(L.Motion.Event.Started, {layer: this}, false);
		return this;
	},

	/**
		Stops all motions in current group;
	*/
	motionStop: function () {
		this.invoke("motionStop");
		this.fire(L.Motion.Event.Ended, {layer: this}, false);
		return this;
	},

	/**
		Pauses all motions in current group;
	*/
	motionPause: function () {
		this.invoke("motionPause");
		this.fire(L.Motion.Event.Paused, {layer: this}, false);
		return this;
	},

	/**
		Reset all motions in current group;
	*/
	motionResume: function () {
		this.invoke("motionResume");
		this.fire(L.Motion.Event.Resumed, {layer: this}, false);
		return this;
	},

	/**
		Reset all motions in current group;
	*/
	motionToggle: function () {
		this.invoke("motionToggle");
		return this;
	}
});

L.motion.group = function(motions, options){
    return new L.Motion.Group(motions, options);
};
