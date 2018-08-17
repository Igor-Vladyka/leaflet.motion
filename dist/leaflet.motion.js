/*!
 * 
 *  leaflet.motion - v0.0.2 (https://github.com/Igor-Vladyka/leaflet.motion#readme) 
 *  Leaflet plugin that allow to animate line leaflet map objects
 *  
 *  MIT (http://www.opensource.org/licenses/mit-license.php)
 *  (c) 2018  Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/)
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/layer/leaflet.motion.polygon.js":
/*!*********************************************!*\
  !*** ./src/layer/leaflet.motion.polygon.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\r\n**/\r\n\r\nL.Motion.Polygon = L.Polygon.extend({\r\n\toptions: L.Motion.Animate.defaultOptions,\r\n\tinitialize: function (linePoints, options) {\r\n        this._linePoints = linePoints[0].map(function(m){ return L.Motion.Utils.toLatLng(m); });\r\n\t\tthis._linePoints.push(this._linePoints[0]);\r\n        L.Polygon.prototype.initialize.call(this, [], options);\r\n    },\r\n});\r\n\r\nL.Motion.Polygon.include(L.Motion.Animate);\r\n\r\nL.motion.polygon = function(latlngs, options){\r\n    return new L.Motion.Polygon(latlngs, options);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/layer/leaflet.motion.polygon.js?");

/***/ }),

/***/ "./src/layer/leaflet.motion.polyline.js":
/*!**********************************************!*\
  !*** ./src/layer/leaflet.motion.polyline.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\r\n**/\r\n\r\nL.Motion.Polyline = L.Polyline.extend ({\r\n\toptions: L.Motion.Animate.defaultOptions,\r\n    initialize: function (movePoints, options) {\r\n        this._linePoints = movePoints.map(function(m){ return L.Motion.Utils.toLatLng(m); });\r\n        L.Polyline.prototype.initialize.call(this, [], options);\r\n    },\r\n\r\n\t_convertToMoveObjects: function (movePoints) {\r\n\t\tif (movePoints instanceof L.Motion.Move) {\r\n\t\t\treturn movePoints;\r\n\t\t}\r\n\r\n\t\tif (L.Util.isArray(movePoints)) {\r\n\t\t\tmovePoints = movePoints.map(function(m){ return L.Motion.Utils.toLatLng(m); });\r\n\t\t\treturn L.Motion.Move.speedMove(movePoints, this.options.speed);\r\n\t\t}\r\n\r\n\t\treturn null;\r\n\t}\r\n});\r\n\r\nL.Motion.Polyline.include(L.Motion.Animate);\r\n\r\nL.motion.polyline = function(latlngs, options){\r\n    return new L.Motion.Polyline(latlngs, options);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/layer/leaflet.motion.polyline.js?");

/***/ }),

/***/ "./src/leaflet.motion.easing.js":
/*!**************************************!*\
  !*** ./src/leaflet.motion.easing.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\r\n**/\r\n\r\nL.Motion.Ease = {\r\n\tlinear: function( x ) {\r\n\t\treturn x;\r\n\t},\r\n\tswing: function( x ) {\r\n\t\treturn 0.5 - Math.cos( x * Math.PI ) / 2;\r\n\t},\r\n\teaseInQuad: function (x, t, b, c, d) {\r\n\t\treturn c*(t/=d)*t + b;\r\n\t},\r\n\teaseOutQuad: function (x, t, b, c, d) {\r\n\t\treturn -c *(t/=d)*(t-2) + b;\r\n\t},\r\n\teaseInOutQuad: function (x, t, b, c, d) {\r\n\t\tif ((t/=d/2) < 1) return c/2*t*t + b;\r\n\t\treturn -c/2 * ((--t)*(t-2) - 1) + b;\r\n\t},\r\n\teaseInCubic: function (x, t, b, c, d) {\r\n\t\treturn c*(t/=d)*t*t + b;\r\n\t},\r\n\teaseOutCubic: function (x, t, b, c, d) {\r\n\t\treturn c*((t=t/d-1)*t*t + 1) + b;\r\n\t},\r\n\teaseInOutCubic: function (x, t, b, c, d) {\r\n\t\tif ((t/=d/2) < 1) return c/2*t*t*t + b;\r\n\t\treturn c/2*((t-=2)*t*t + 2) + b;\r\n\t},\r\n\teaseInQuart: function (x, t, b, c, d) {\r\n\t\treturn c*(t/=d)*t*t*t + b;\r\n\t},\r\n\teaseOutQuart: function (x, t, b, c, d) {\r\n\t\treturn -c * ((t=t/d-1)*t*t*t - 1) + b;\r\n\t},\r\n\teaseInOutQuart: function (x, t, b, c, d) {\r\n\t\tif ((t/=d/2) < 1) return c/2*t*t*t*t + b;\r\n\t\treturn -c/2 * ((t-=2)*t*t*t - 2) + b;\r\n\t},\r\n\teaseInQuint: function (x, t, b, c, d) {\r\n\t\treturn c*(t/=d)*t*t*t*t + b;\r\n\t},\r\n\teaseOutQuint: function (x, t, b, c, d) {\r\n\t\treturn c*((t=t/d-1)*t*t*t*t + 1) + b;\r\n\t},\r\n\teaseInOutQuint: function (x, t, b, c, d) {\r\n\t\tif ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;\r\n\t\treturn c/2*((t-=2)*t*t*t*t + 2) + b;\r\n\t},\r\n\teaseInSine: function (x, t, b, c, d) {\r\n\t\treturn -c * Math.cos(t/d * (Math.PI/2)) + c + b;\r\n\t},\r\n\teaseOutSine: function (x, t, b, c, d) {\r\n\t\treturn c * Math.sin(t/d * (Math.PI/2)) + b;\r\n\t},\r\n\teaseInOutSine: function (x, t, b, c, d) {\r\n\t\treturn -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;\r\n\t},\r\n\teaseInExpo: function (x, t, b, c, d) {\r\n\t\treturn (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;\r\n\t},\r\n\teaseOutExpo: function (x, t, b, c, d) {\r\n\t\treturn (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;\r\n\t},\r\n\teaseInOutExpo: function (x, t, b, c, d) {\r\n\t\tif (t==0) return b;\r\n\t\tif (t==d) return b+c;\r\n\t\tif ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;\r\n\t\treturn c/2 * (-Math.pow(2, -10 * --t) + 2) + b;\r\n\t},\r\n\teaseInCirc: function (x, t, b, c, d) {\r\n\t\treturn -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;\r\n\t},\r\n\teaseOutCirc: function (x, t, b, c, d) {\r\n\t\treturn c * Math.sqrt(1 - (t=t/d-1)*t) + b;\r\n\t},\r\n\teaseInOutCirc: function (x, t, b, c, d) {\r\n\t\tif ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;\r\n\t\treturn c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;\r\n\t},\r\n\teaseInElastic: function (x, t, b, c, d) {\r\n\t\tvar s=1.70158;var p=0;var a=c;\r\n\t\tif (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;\r\n\t\tif (a < Math.abs(c)) { a=c; var s=p/4; }\r\n\t\telse var s = p/(2*Math.PI) * Math.asin (c/a);\r\n\t\treturn -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;\r\n\t},\r\n\teaseOutElastic: function (x, t, b, c, d) {\r\n\t\tvar s=1.70158;var p=0;var a=c;\r\n\t\tif (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;\r\n\t\tif (a < Math.abs(c)) { a=c; var s=p/4; }\r\n\t\telse var s = p/(2*Math.PI) * Math.asin (c/a);\r\n\t\treturn a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;\r\n\t},\r\n\teaseInOutElastic: function (x, t, b, c, d) {\r\n\t\tvar s=1.70158;var p=0;var a=c;\r\n\t\tif (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);\r\n\t\tif (a < Math.abs(c)) { a=c; var s=p/4; }\r\n\t\telse var s = p/(2*Math.PI) * Math.asin (c/a);\r\n\t\tif (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;\r\n\t\treturn a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;\r\n\t},\r\n\teaseInBack: function (x, t, b, c, d, s) {\r\n\t\tif (s == undefined) s = 1.70158;\r\n\t\treturn c*(t/=d)*t*((s+1)*t - s) + b;\r\n\t},\r\n\teaseOutBack: function (x, t, b, c, d, s) {\r\n\t\tif (s == undefined) s = 1.70158;\r\n\t\treturn c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;\r\n\t},\r\n\teaseInOutBack: function (x, t, b, c, d, s) {\r\n\t\tif (s == undefined) s = 1.70158;\r\n\t\tif ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;\r\n\t\treturn c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;\r\n\t},\r\n\teaseInBounce: function (x, t, b, c, d) {\r\n\t\treturn c - this.easeOutBounce (x, d-t, 0, c, d) + b;\r\n\t},\r\n\teaseOutBounce: function (x, t, b, c, d) {\r\n\t\tif ((t/=d) < (1/2.75)) {\r\n\t\t\treturn c*(7.5625*t*t) + b;\r\n\t\t} else if (t < (2/2.75)) {\r\n\t\t\treturn c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;\r\n\t\t} else if (t < (2.5/2.75)) {\r\n\t\t\treturn c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;\r\n\t\t} else {\r\n\t\t\treturn c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;\r\n\t\t}\r\n\t},\r\n\teaseInOutBounce: function (x, t, b, c, d) {\r\n\t\tif (t < d/2) return this.easeInBounce (x, t*2, 0, c, d) * .5 + b;\r\n\t\treturn this.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack:///./src/leaflet.motion.easing.js?");

/***/ }),

/***/ "./src/leaflet.motion.js":
/*!*******************************!*\
  !*** ./src/leaflet.motion.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\r\n**/\r\n\r\nL.Motion = L.Motion || { Event: { Started:\"started\", Ended: \"ended\", Section: \"section\" } };\r\nL.motion = L.motion || {};\r\nL.Motion.Animate = {\r\n\tdefaultOptions: {\r\n\t\tpane: \"polymotionPane\",\r\n\t\tattribution: \"Leaflet.Motion © \" + (new Date()).getFullYear() + \" Igor Vladyka\",\r\n\t\tauto: false,\r\n\t\tmarker: null,\r\n\t\teasing: function(x){ return x; }, // linear\r\n\t\tspeed: 50, // KM/s\r\n\t\tduration: 5000\r\n\t},\r\n\r\n\t/**\r\n        @param {Map} map the Leaflet Map\r\n    */\r\n\tbeforeAdd: function (map) {\r\n\t\tif (!map.getPane(this.options.pane)) {\r\n\t\t\tmap.createPane(this.options.pane).style.zIndex = 499;\r\n\t\t}\r\n\r\n\t\tL.Polyline.prototype.beforeAdd.call(this, map);\r\n\t},\r\n\r\n\t/**\r\n        @param {Map} map the Leaflet Map\r\n    */\r\n    onAdd: function (map) {\r\n        L.Polyline.prototype.onAdd.call(this, map);\r\n\r\n\t\tif (this.options.auto) {\r\n\t\t\tthis.startMotion();\r\n\t\t}\r\n        return this;\r\n    },\r\n\r\n\tdrawMarker: function (nextPoint) {\r\n\t\tvar prevPoint = this.options.marker.getLatLng();\r\n\t\tvar angle = Math.atan2(nextPoint.lat - prevPoint.lat, nextPoint.lng - prevPoint.lng) * 180 / Math.PI;\r\n\t\tif (angle < 0) {\r\n\t        angle += 360;\r\n\t    }\r\n\r\n\t\tthis.options.marker._icon.children[0].style.transform = \"rotate(-\" + Math.round(angle - 45) +\"deg)\"\r\n\t\tthis.options.marker.setLatLng(nextPoint);\r\n\t},\r\n\r\n\t/**\r\n        @param {Map} map the Leaflet Map\r\n    */\r\n\tonRemove: function (map) {\r\n\t\tthis.stopMotion();\r\n        L.Polyline.prototype.onRemove.call(this, map);\r\n\t},\r\n\r\n\t/**\r\n        @param {DateTime} startTime time from start animation\r\n    */\r\n    _motion: function (startTime, duration) {\r\n\t\tvar ellapsedTime = (new Date()).getTime() - startTime;\r\n        var durationRatio = ellapsedTime / duration; // 0 - 1\r\n\t\tdurationRatio = this.options.easing(durationRatio, ellapsedTime, 0, 1, duration);\r\n\r\n\t\tvar nextPoint = L.Motion.Utils.interpolateOnLine(this._map, this._linePoints, durationRatio);\r\n\r\n\t\tthis.addLatLng(nextPoint.latLng);\r\n\r\n\t\tif (durationRatio < 1) {\r\n\t\t\tthis.animation = L.Util.requestAnimFrame(function(){\r\n\t\t\t\tthis._motion(startTime, duration);\r\n\t\t\t}, this);\r\n\t\t} else {\r\n\t\t\tthis.setLatLngs(this._linePoints);\r\n\t\t\tthis.stopMotion();\r\n\t\t}\r\n    },\r\n\r\n    startMotion: function () {\r\n\t\tif (!this.animation) {\r\n\t\t\tthis.fire(L.Motion.Event.Started, this);\r\n\t        this._motion((new Date).getTime(), this.options.duration);\r\n\t\t}\r\n    },\r\n\r\n    stopMotion: function () {\r\n\t\tthis.pauseMotion();\r\n\t\tthis.setLatLngs([]);\r\n\t\tthis.fire(L.Motion.Event.Ended, this);\r\n    },\r\n\r\n\tpauseMotion: function () {\r\n\t\tif (this.animation) {\r\n\t\t\tL.Util.cancelAnimFrame(this.animation);\r\n\t\t\tthis.animation = null;\r\n\t\t}\r\n\t},\r\n\r\n\tresumeMotion: function () {\r\n\t\t// TODO: implement resume from last point;\r\n\t},\r\n\r\n\t/**\r\n        @param {String} property property to reduce on\r\n        @return {Number} calculated reduced value\r\n    */\r\n\t__reducer: function (property) {\r\n\t\treturn function(accumulative, object) {\r\n\t\t\treturn accumulative + object[property];\r\n\t\t};\r\n\t},\r\n\r\n\t/**\r\n        @param {LatLng[]} collection of coordinates\r\n        @param {Number} speed in KM/s\r\n        @return {Number} duration\r\n    */\r\n\tgetDuration: function (collection, speed) {\r\n\t\tspeed = speed || this.options.speed || this.defaultOptions.speed;\r\n\t\tcollection = collection || this._linePoints;\r\n\t\tcollection = collection.map(function(m){ return L.Motion.Utils.toLatLng(m); })\r\n\t\tvar distance = L.Motion.Utils.distance(collection);\r\n\t\treturn distance/speed;\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/leaflet.motion.js?");

/***/ }),

/***/ "./src/leaflet.motion.move.js":
/*!************************************!*\
  !*** ./src/leaflet.motion.move.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\r\n**/\r\n\r\nL.Motion.Move = function (points, options) {\r\n\tif (!points || !(points.length > 1)) {\r\n\t\tthrow \"please specify valid points\";\r\n\t}\r\n\r\n\tthis.points = points.map(function(m) { return L.Motion.Utils.toLatLng(m)});\r\n\tthis.options = options;\r\n};\r\n\r\nL.motion.move = function (points, options) {\r\n\treturn new L.Motion.Move(points, options);\r\n}\r\n\r\nL.motion.move.speedMove = function (points, speed, options) {\r\n\tvar dist = L.Motion.Utils.distance(points); // Distance in meters;\r\n\tspeed = speed || 50;\r\n\toptions = options || {};\r\n\toptions.duration = dist/speed;\r\n\treturn L.motion.move(points, options)\r\n};\r\n\r\nL.motion.move.durationMove = function (points, duration, options) {\r\n\toptions = options || {};\r\n\toptions.duration = duration;\r\n\treturn L.motion.move(points, options)\r\n};\r\n\n\n//# sourceURL=webpack:///./src/leaflet.motion.move.js?");

/***/ }),

/***/ "./src/leaflet.motion.utils.js":
/*!*************************************!*\
  !*** ./src/leaflet.motion.utils.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\r\n**/\r\n\r\nL.Motion.Utils = {\r\n\t/**\r\n\t\tReturns the coordinate of the point located on a line at the specified ratio of the line length.\r\n\t\t@param {L.Map} map Leaflet map to be used for this method\r\n\t\t@param {Array<L.LatLng>|L.PolyLine} latlngs Set of geographical points\r\n\t\t@param {Number} ratio the length ratio, expressed as a decimal between 0 and 1, inclusive\r\n\t\t@returns {Object} an object with latLng ({LatLng}) and predecessor ({Number}), the index of the preceding vertex in the Polyline\r\n\t\t(-1 if the interpolated point is the first vertex)\r\n\t*/\r\n\tinterpolateOnLine: function (map, latLngs, ratio) {\r\n\t\tlatLngs = (latLngs instanceof L.Polyline) ? latLngs.getLatLngs() : latLngs;\r\n\t\tvar n = latLngs.length;\r\n\t\tif (n < 2) {\r\n\t\t\treturn null;\r\n\t\t}\r\n\r\n\t\t// ensure the ratio is between 0 and 1;\r\n\t\tratio = Math.max(Math.min(ratio, 1), 0);\r\n\r\n\t\tif (ratio === 0) {\r\n\t\t\treturn {\r\n\t\t\t\tlatLng: latLngs[0] instanceof L.LatLng ? latLngs[0] : L.latLng(latLngs[0]),\r\n\t\t\t\tpredecessor: -1\r\n\t\t\t};\r\n\t\t}\r\n\t\tif (ratio == 1) {\r\n\t\t\treturn {\r\n\t\t\t\tlatLng: latLngs[latLngs.length -1] instanceof L.LatLng ? latLngs[latLngs.length -1] : L.latLng(latLngs[latLngs.length -1]),\r\n\t\t\t\tpredecessor: latLngs.length - 2\r\n\t\t\t};\r\n\t\t}\r\n\r\n\t\t// project the LatLngs as Points,\r\n\t\t// and compute total planar length of the line at max precision\r\n\t\tvar maxzoom = map.getMaxZoom();\r\n\t\tif (maxzoom === Infinity)\r\n\t\t\tmaxzoom = map.getZoom();\r\n\t\tvar pts = [];\r\n\t\tvar lineLength = 0;\r\n\t\tfor(var i = 0; i < n; i++) {\r\n\t\t\tpts[i] = map.project(latLngs[i], maxzoom);\r\n\t\t\tif(i > 0)\r\n\t\t\t  lineLength += pts[i-1].distanceTo(pts[i]);\r\n\t\t}\r\n\r\n\t\tvar ratioDist = lineLength * ratio;\r\n\r\n\t\t// follow the line segments [ab], adding lengths,\r\n\t\t// until we find the segment where the points should lie on\r\n\t\tvar cumulativeDistanceToA = 0, cumulativeDistanceToB = 0;\r\n\t\tfor (var i = 0; cumulativeDistanceToB < ratioDist; i++) {\r\n\t\t\tvar pointA = pts[i], pointB = pts[i+1];\r\n\r\n\t\t\tcumulativeDistanceToA = cumulativeDistanceToB;\r\n\t\t\tcumulativeDistanceToB += pointA.distanceTo(pointB);\r\n\t\t}\r\n\r\n\t\tif (pointA == undefined && pointB == undefined) { // Happens when line has no length\r\n\t\t\tvar pointA = pts[0], pointB = pts[1], i = 1;\r\n\t\t}\r\n\r\n\t\t// compute the ratio relative to the segment [ab]\r\n\t\tvar segmentRatio = ((cumulativeDistanceToB - cumulativeDistanceToA) !== 0) ? ((ratioDist - cumulativeDistanceToA) / (cumulativeDistanceToB - cumulativeDistanceToA)) : 0;\r\n\t\tvar interpolatedPoint = this.interpolateOnPointSegment(pointA, pointB, segmentRatio);\r\n\t\treturn {\r\n\t\t\tlatLng: map.unproject(interpolatedPoint, maxzoom),\r\n\t\t\tpredecessor: i-1\r\n\t\t};\r\n\t},\r\n\r\n    /**\r\n        Returns the Point located on a segment at the specified ratio of the segment length.\r\n        @param {L.Point} pA coordinates of point A\r\n        @param {L.Point} pB coordinates of point B\r\n        @param {Number} the length ratio, expressed as a decimal between 0 and 1, inclusive.\r\n        @returns {L.Point} the interpolated point.\r\n    */\r\n    interpolateOnPointSegment: function (pA, pB, ratio) {\r\n        return L.point(\r\n            (pA.x * (1 - ratio)) + (ratio * pB.x),\r\n            (pA.y * (1 - ratio)) + (ratio * pB.y)\r\n        );\r\n    },\r\n\r\n\tdistance: function(linePoints){\r\n\t\tvar distanceInMeter = 0;\r\n        for (var i = 1; i < linePoints.length; i++) {\r\n            distanceInMeter += linePoints[i].distanceTo(linePoints[i - 1]);\r\n        }\r\n\r\n        return distanceInMeter;\r\n\t},\r\n\r\n\ttoLatLng: function(a, b, c) {\r\n\t\tif (a instanceof L.LatLng) {\r\n\t\t\treturn a;\r\n\t\t}\r\n\t\tif (L.Util.isArray(a) && typeof a[0] !== 'object') {\r\n\t\t\tif (a.length === 3) {\r\n\t\t\t\treturn L.latLng(a[0], a[1], a[2]);\r\n\t\t\t}\r\n\t\t\tif (a.length === 2) {\r\n\t\t\t\treturn L.latLng(a[0], a[1]);\r\n\t\t\t}\r\n\t\t\treturn null;\r\n\t\t}\r\n\t\tif (a === undefined || a === null) {\r\n\t\t\treturn a;\r\n\t\t}\r\n\t\tif (typeof a === 'object' && 'lat' in a) {\r\n\t\t\treturn L.latLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);\r\n\t\t}\r\n\t\tif (b === undefined) {\r\n\t\t\treturn null;\r\n\t\t}\r\n\t\treturn L.latLng(a, b, c);\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack:///./src/leaflet.motion.utils.js?");

/***/ }),

/***/ 0:
/*!************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/leaflet.motion.js ./src/leaflet.motion.move.js ./src/leaflet.motion.easing.js ./src/leaflet.motion.utils.js ./src/layer/leaflet.motion.polyline.js ./src/layer/leaflet.motion.polygon.js ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/leaflet.motion.js */\"./src/leaflet.motion.js\");\n__webpack_require__(/*! ./src/leaflet.motion.move.js */\"./src/leaflet.motion.move.js\");\n__webpack_require__(/*! ./src/leaflet.motion.easing.js */\"./src/leaflet.motion.easing.js\");\n__webpack_require__(/*! ./src/leaflet.motion.utils.js */\"./src/leaflet.motion.utils.js\");\n__webpack_require__(/*! ./src/layer/leaflet.motion.polyline.js */\"./src/layer/leaflet.motion.polyline.js\");\nmodule.exports = __webpack_require__(/*! ./src/layer/leaflet.motion.polygon.js */\"./src/layer/leaflet.motion.polygon.js\");\n\n\n//# sourceURL=webpack:///multi_./src/leaflet.motion.js_./src/leaflet.motion.move.js_./src/leaflet.motion.easing.js_./src/leaflet.motion.utils.js_./src/layer/leaflet.motion.polyline.js_./src/layer/leaflet.motion.polygon.js?");

/***/ })

/******/ });