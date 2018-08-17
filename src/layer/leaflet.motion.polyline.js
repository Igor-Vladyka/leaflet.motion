/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion.Polyline = L.Polyline.extend ({
	options: L.Motion.Animate.defaultOptions,
    initialize: function (movePoints, options) {
        this._linePoints = movePoints.map(function(m){ return L.Motion.Utils.toLatLng(m); });
        L.Polyline.prototype.initialize.call(this, [], options);
    },

	_convertToMoveObjects: function (movePoints) {
		if (movePoints instanceof L.Motion.Move) {
			return movePoints;
		}

		if (L.Util.isArray(movePoints)) {
			movePoints = movePoints.map(function(m){ return L.Motion.Utils.toLatLng(m); });
			return L.Motion.Move.speedMove(movePoints, this.options.speed);
		}

		return null;
	}
});

L.Motion.Polyline.include(L.Motion.Animate);

L.motion.polyline = function(latlngs, options){
    return new L.Motion.Polyline(latlngs, options);
};
