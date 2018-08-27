/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion.Polygon = L.Polygon.extend({
	options: L.Motion.Animate.defaultOptions,
	initialize: function (linePoints, options) {
        this._linePoints = linePoints[0].map(function(m){ return L.Motion.Utils.toLatLng(m); });
        L.Polygon.prototype.initialize.call(this, [], options);
    },
});

L.Motion.Polygon.include(L.Motion.Animate);

L.motion.polygon = function(latlngs, options){
    return new L.Motion.Polygon(latlngs, options);
};
