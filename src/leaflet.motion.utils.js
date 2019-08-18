/**
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)
**/

L.Motion.Utils = {
	/**
		Returns the coordinate of the point located on a line at the specified ratio of the line length.
		@param {L.Map} map Leaflet map to be used for this method
		@param {Array<L.LatLng>|L.PolyLine} latlngs Set of geographical points
		@param {Number} ratio the length ratio, expressed as a decimal between 0 and 1, inclusive
		@returns {Object} an object with latLng ({LatLng}) and predecessor ({Number}), the index of the preceding vertex in the Polyline
		(-1 if the interpolated point is the first vertex)
	*/
	interpolateOnLine: function (map, latLngs, ratio) {
		latLngs = (latLngs instanceof L.Polyline) ? latLngs.getLatLngs() : latLngs;
		var n = latLngs.length;
		if (n < 2) {
			return null;
		}

		// ensure the ratio is between 0 and 1;
		ratio = Math.max(Math.min(ratio, 1), 0);

		if (ratio === 0) {
			return {
				latLng: latLngs[0] instanceof L.LatLng ? latLngs[0] : L.latLng(latLngs[0]),
				predecessor: -1
			};
		}
		if (ratio == 1) {
			return {
				latLng: latLngs[latLngs.length -1] instanceof L.LatLng ? latLngs[latLngs.length -1] : L.latLng(latLngs[latLngs.length -1]),
				predecessor: latLngs.length - 2
			};
		}

		// project the LatLngs as Points,
		// and compute total planar length of the line at max precision
		var maxzoom = map.getMaxZoom();
		if (maxzoom === Infinity)
			maxzoom = map.getZoom();
		var pts = [];
		var lineLength = 0;
		for(var i = 0; i < n; i++) {
			pts[i] = map.project(latLngs[i], maxzoom);
			if(i > 0)
			  lineLength += pts[i-1].distanceTo(pts[i]);
		}

		var ratioDist = lineLength * ratio;

		// follow the line segments [ab], adding lengths,
		// until we find the segment where the points should lie on
		var cumulativeDistanceToA = 0, cumulativeDistanceToB = 0;
		for (var i = 0; cumulativeDistanceToB < ratioDist; i++) {
			var pointA = pts[i], pointB = pts[i+1];

			cumulativeDistanceToA = cumulativeDistanceToB;
			cumulativeDistanceToB += pointA.distanceTo(pointB);
		}

		if (pointA == undefined && pointB == undefined) { // Happens when line has no length
			var pointA = pts[0], pointB = pts[1], i = 1;
		}

		// compute the ratio relative to the segment [ab]
		var segmentRatio = ((cumulativeDistanceToB - cumulativeDistanceToA) !== 0) ? ((ratioDist - cumulativeDistanceToA) / (cumulativeDistanceToB - cumulativeDistanceToA)) : 0;
		var interpolatedPoint = this.interpolateOnPointSegment(pointA, pointB, segmentRatio);
		return {
			latLng: map.unproject(interpolatedPoint, maxzoom),
			predecessor: i-1
		};
	},

    /**
        Returns the Point located on a segment at the specified ratio of the segment length.
        @param {L.Point} pA coordinates of point A
        @param {L.Point} pB coordinates of point B
        @param {Number} the length ratio, expressed as a decimal between 0 and 1, inclusive.
        @returns {L.Point} the interpolated point.
    */
    interpolateOnPointSegment: function (pA, pB, ratio) {
        return L.point(
            (pA.x * (1 - ratio)) + (ratio * pB.x),
            (pA.y * (1 - ratio)) + (ratio * pB.y)
        );
    },

	/**
        @param {LatLng[]} linePoints of coordinates
        @return {Number} distance in meter
    */
	distance: function(linePoints){
		var distanceInMeter = 0;
        for (var i = 1; i < linePoints.length; i++) {
            distanceInMeter += linePoints[i].distanceTo(linePoints[i - 1]);
        }

        return distanceInMeter;
	},

	/**
        @param {LatLng[]} collection of coordinates
        @param {Number} speed in KM/H
        @return {Number} duration in ms
    */
	getDuration: function (collection, speed) {
		var distance = L.Motion.Utils.distance(collection.map(function(m){ return L.Motion.Utils.toLatLng(m); })); // in meters;
		return distance/(speed/3600); // m / (km/h * 1000 => m/h / (60 * 60)) => m / k/s (m/s * 1000) => 1000 * m / m/s => ms;
	},

	toLatLng: function(a, b, c) {
		if (a instanceof L.LatLng) {
			return a;
		}
		if (L.Util.isArray(a) && typeof a[0] !== 'object') {
			if (a.length === 3) {
				return L.latLng(a[0], a[1], a[2]);
			}
			if (a.length === 2) {
				return L.latLng(a[0], a[1]);
			}
			return null;
		}
		if (a === undefined || a === null) {
			return a;
		}
		if (typeof a === 'object' && 'lat' in a) {
			return L.latLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);
		}
		if (b === undefined) {
			return null;
		}
		return L.latLng(a, b, c);
	},

	getAngle: function(prevPoint, nextPoint) {
		var angle = Math.atan2(nextPoint.lat - prevPoint.lat, nextPoint.lng - prevPoint.lng) * 180 / Math.PI;
		if (angle < 0) {
			angle += 360;
		}

		return angle;
	}
};
