/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion.Polyline = L.Polyline.extend(L.Motion.Animate);

L.motion.polyline = function(latlngs, options, motionOptions, markerOptions){
    return new L.Motion.Polyline(latlngs, options, motionOptions, markerOptions);
};
