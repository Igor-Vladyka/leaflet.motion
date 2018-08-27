/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion.Polyline = L.Polyline.extend({
	options: L.Motion.Animate.defaultOptions,
    initialize: function (linePoints, options) {
        this._linePoints = linePoints.map(function(m){ return L.Motion.Utils.toLatLng(m); });
        L.Polyline.prototype.initialize.call(this, [], options);
    },
});

L.Motion.Polyline.include(L.Motion.Animate);

L.motion.polyline = function(latlngs, options){
    return new L.Motion.Polyline(latlngs, options);
};
