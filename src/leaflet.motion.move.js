/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion.Move = function (points, options) {
	if (!points || !(points.length > 1)) {
		throw "please specify valid points";
	}

	this.points = points.map(function(m) { return L.Motion.Utils.toLatLng(m)});
	this.options = options;
};

L.motion.move = function (points, options) {
	return new L.Motion.Move(points, options);
}

L.motion.move.speedMove = function (points, speed, options) {
	var dist = L.Motion.Utils.distance(points); // Distance in meters;
	speed = speed || 50;
	options = options || {};
	options.duration = dist/speed;
	return L.motion.move(points, options)
};

L.motion.move.durationMove = function (points, duration, options) {
	options = options || {};
	options.duration = duration;
	return L.motion.move(points, options)
};
