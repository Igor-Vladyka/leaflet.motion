/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion.Group = L.FeatureGroup.extend ({
	options: {
		pane: L.Motion.Animate.defaultOptions.pane,
		attribution: L.Motion.Animate.defaultOptions.attribution,
	},

	/**
		Starts all motions in current group;
	*/
	startMotion: function () {
		this.invoke("startMotion");
		this.fire(L.Motion.Event.Started, {layer: this}, false);
		return this;
	},

	/**
		Stops all motions in current group;
	*/
	stopMotion: function () {
		this.invoke("stopMotion");
		this.fire(L.Motion.Event.Ended, {layer: this}, false);
		return this;
	},

	/**
		Pauses all motions in current group;
	*/
	pauseMotion: function () {
		this.invoke("pauseMotion");
		this.fire(L.Motion.Event.Paused, {layer: this}, false);
		return this;
	},

	/**
		Reset all motions in current group;
	*/
	resumeMotion: function () {
		this.invoke("resumeMotion");
		this.fire(L.Motion.Event.Resumed, {layer: this}, false);
		return this;
	},

	/**
		Reset all motions in current group;
	*/
	toggleMotion: function () {
		this.invoke("toggleMotion");
		return this;
	}
});

L.motion.group = function(motions, options){
    return new L.Motion.Group(motions, options);
};
