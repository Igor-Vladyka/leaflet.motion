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
        L.FeatureGroup.prototype.initialize.call(this, motionMoves.map(function(f){ return L.motion.polyline(f.points, f.options); }), options);
    },
	addMotion: function(motion) {
		if (motion instanceof L.Motion.Move){
			this.addLayer(l.motion.polyline(motion.points, motion.options));
		}
	},
	startAll: function () {
		this.invoke("startMotion");
	},
	stopAll: function () {
		this.invoke("stopMotion");
	},
	pauseAll: function () {
		this.invoke("pauseMotion");
	},
	resumeAll: function () {
		this.invoke("resumeMotion");
	},
	startSeq: function () {
		var layers = this.getLayers();
		var layer = layers[0];

		layer.startMotion();

		for (var i = 1; i < layers.length; i++) {
			this._setupDelay(layer, layers[i]);
			layer = layers[i];
		}
	},
	_setupDelay: function (currentLayer, nextLayer) {
		currentLayer.on(L.Motion.Event.Ended, function(){
			nextLayer.startMotion();
		});
	}
});

L.motion.group = function(motionMove, options){
    return new L.Motion.Group(motionMove, options);
};
