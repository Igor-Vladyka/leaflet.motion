/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion.Polygon = L.Polygon.extend(L.Motion.Animate);

L.motion.polygon = function(latlngs, options, motionOptions, markerOptions){
    return new L.Motion.Polygon(latlngs, options, motionOptions, markerOptions);
};
