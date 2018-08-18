/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion.Group = L.FeatureGroup.extend ({
	options: {
		pane: L.Motion.Animate.defaultOptions.pane,
		attribution: L.Motion.Animate.defaultOptions.attribution,
	},
    initialize: function (motionMoves, options) {
		var items =  motionMoves.map(function(f){ return L.motion.polyline(f.points, f.options); });
        L.FeatureGroup.prototype.initialize.call(this, items, options);
    },
	startAll: function () {
		this.fire(L.Motion.Event.GroupStarted);
		this.invoke("startMotion");
	},
	stopAll: function () {
		this.invoke("stopMotion");
		this.fire(L.Motion.Event.GroupEnded);
	},
	pauseAll: function () {
		this.invoke("pauseMotion");
		this.fire(L.Motion.Event.GroupPaused);
	}
});

L.motion.group = function(motionMove, options){
    return new L.Motion.Group(motionMove, options);
};
