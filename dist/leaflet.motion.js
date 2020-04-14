/*!
 * 
 *  leaflet.motion - v0.2 (https://github.com/Igor-Vladyka/leaflet.motion#readme) 
 *  Animation plugin for Leaflet.js
 *  
 *  MIT (http://www.opensource.org/licenses/mit-license.php)
 *  (c) 2020  Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/)
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

/***/ "./src/layer/leaflet.motion.group.js":
/*!*******************************************!*\
  !*** ./src/layer/leaflet.motion.group.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\n**/\n\nL.Motion.Group = L.FeatureGroup.extend ({\n\toptions: {\n\t\tpane: L.Motion.Animate.options.pane,\n\t\tattribution: L.Motion.Animate.options.attribution,\n\t},\n\n\t/**\n\t\tStarts all motions in current group;\n\t*/\n\tmotionStart: function () {\n\t\tthis.invoke(\"motionStart\");\n\t\tthis.fire(L.Motion.Event.Started, {layer: this}, false);\n\t\treturn this;\n\t},\n\n\t/**\n\t\tStops all motions in current group;\n\t*/\n\tmotionStop: function () {\n\t\tthis.invoke(\"motionStop\");\n\t\tthis.fire(L.Motion.Event.Ended, {layer: this}, false);\n\t\treturn this;\n\t},\n\n\t/**\n\t\tPauses all motions in current group;\n\t*/\n\tmotionPause: function () {\n\t\tthis.invoke(\"motionPause\");\n\t\tthis.fire(L.Motion.Event.Paused, {layer: this}, false);\n\t\treturn this;\n\t},\n\n\t/**\n\t\tReset all motions in current group;\n\t*/\n\tmotionResume: function () {\n\t\tthis.invoke(\"motionResume\");\n\t\tthis.fire(L.Motion.Event.Resumed, {layer: this}, false);\n\t\treturn this;\n\t},\n\n\t/**\n\t\tReset all motions in current group;\n\t*/\n\tmotionToggle: function () {\n\t\tthis.invoke(\"motionToggle\");\n\t\treturn this;\n\t},\n\n\t/**\n\t\tReturns markers array from all inner layers without flattering.\n\t*/\n\tgetMarkers: function () {\n\t\treturn this.getLayers().map(function(l) { return l.getMarkers(); });\n\t}\n});\n\nL.motion.group = function(motions, options){\n    return new L.Motion.Group(motions, options);\n};\n\n\n//# sourceURL=webpack:///./src/layer/leaflet.motion.group.js?");

/***/ }),

/***/ "./src/layer/leaflet.motion.polygon.js":
/*!*********************************************!*\
  !*** ./src/layer/leaflet.motion.polygon.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\n**/\n\nL.Motion.Polygon = L.Polygon.extend(L.Motion.Animate);\n\nL.motion.polygon = function(latlngs, options, motionOptions, markerOptions){\n    return new L.Motion.Polygon(latlngs, options, motionOptions, markerOptions);\n};\n\n\n//# sourceURL=webpack:///./src/layer/leaflet.motion.polygon.js?");

/***/ }),

/***/ "./src/layer/leaflet.motion.polyline.js":
/*!**********************************************!*\
  !*** ./src/layer/leaflet.motion.polyline.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\n**/\n\nL.Motion.Polyline = L.Polyline.extend(L.Motion.Animate);\n\nL.motion.polyline = function(latlngs, options, motionOptions, markerOptions){\n    return new L.Motion.Polyline(latlngs, options, motionOptions, markerOptions);\n};\n\n\n//# sourceURL=webpack:///./src/layer/leaflet.motion.polyline.js?");

/***/ }),

/***/ "./src/layer/leaflet.motion.seq.js":
/*!*****************************************!*\
  !*** ./src/layer/leaflet.motion.seq.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\n**/\n\nL.Motion.Seq = L.Motion.Group.extend ({\n\t_activeLayer: null,\n\n\t/**\n\t\tStart first motion in current group;\n\t*/\n\tmotionStart: function() {\n\t\tvar layer = this.getFirstLayer();\n\t\tif (layer) {\n\t\t\tthis.__prepareStart();\n\t\t\tlayer.motionStart();\n\t\t\tthis.fire(L.Motion.Event.Started, {layer: this}, false);\n\t\t}\n\n\t\treturn this;\n\t},\n\n\t/**\n\t\tStops all motions in current group;\n\t*/\n\tmotionStop: function() {\n\t\tthis.invoke(\"motionStop\");\n\t\tthis._activeLayer = null;\n\t\tthis.fire(L.Motion.Event.Ended, {layer: this}, false);\n\n\t\treturn this;\n\t},\n\n\t/**\n\t\tPause current motion in current group;\n\t*/\n\tmotionPause: function() {\n\t\tif (this._activeLayer) {\n\t\t\tthis._activeLayer.motionPause();\n\t\t\tthis.fire(L.Motion.Event.Paused, {layer: this}, false);\n\t\t}\n\n\t\treturn this;\n\t},\n\n\t/**\n\t\tResume last motion in current group;\n\t*/\n\tmotionResume: function() {\n\t\tif (this._activeLayer) {\n\t\t\tthis._activeLayer.motionResume();\n\t\t\tthis.fire(L.Motion.Event.Resumed, {layer: this}, false);\n\t\t}\n\n\t\treturn this;\n\t},\n\n\t/**\n\t\tReset all motions in current group;\n\t*/\n\tmotionToggle: function () {\n\t\tif (this._activeLayer) {\n\t\t\tthis.motionPause();\n\t\t} else {\n\t\t\tthis.motionResume();\n\t\t}\n\n\t\treturn this;\n\t},\n\n\tgetFirstLayer: function() {\n\t\tvar allLayers = this.getLayers();\n\t\treturn allLayers.length ? allLayers[0] : null;\n\t},\n\n\t__prepareStart: function() {\n\t\tvar self = this;\n\t\tthis.getLayers().forEach(function(l){\n\t\t\tl.off(L.Motion.Event.Ended, self.__clearActiveLayer__, self);\n\t\t\tl.on(L.Motion.Event.Ended, self.__clearActiveLayer__, self);\n\n\t\t\tl.off(L.Motion.Event.Started, self.__putActiveLayer__, self);\n\t\t\tl.on(L.Motion.Event.Started, self.__putActiveLayer__, self);\n\t\t});\n\t},\n\n\t__clearActiveLayer__: function (e) {\n\t\tthis._activeLayer = null;\n\t\tvar layers = this.getLayers();\n\t\tvar currentId = e.layer._leaflet_id;\n\t\tvar currentObject = layers.filter(function(f){ return f._leaflet_id == currentId })[0];\n\t\tvar nextIndex = layers.indexOf(currentObject) + 1;\n\t\tif (layers.length > nextIndex) {\n\t\t\tlayers[nextIndex].motionStart();\n\t\t} else {\n\t\t\tthis.fire(L.Motion.Event.Ended, {layer: this}, false);\n\t\t}\n\t},\n\n\t__putActiveLayer__: function (e) {\n\t\tthis._activeLayer = e.layer;\n\t\tthis.fire(L.Motion.Event.Section, {layer: this._activeLayer}, false);\n\t}\n});\n\nL.motion.seq = function(motion, options){\n    return new L.Motion.Seq(motion, options);\n};\n\n\n//# sourceURL=webpack:///./src/layer/leaflet.motion.seq.js?");

/***/ }),

/***/ "./src/leaflet.motion.easing.js":
/*!**************************************!*\
  !*** ./src/leaflet.motion.easing.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\n**/\n\nL.Motion.Ease = {\n\tlinear: function( x ) {\n\t\treturn x;\n\t},\n\tswing: function( x ) {\n\t\treturn 0.5 - Math.cos( x * Math.PI ) / 2;\n\t},\n\teaseInQuad: function (x, t, b, c, d) {\n\t\treturn c*(t/=d)*t + b;\n\t},\n\teaseOutQuad: function (x, t, b, c, d) {\n\t\treturn -c *(t/=d)*(t-2) + b;\n\t},\n\teaseInOutQuad: function (x, t, b, c, d) {\n\t\tif ((t/=d/2) < 1) return c/2*t*t + b;\n\t\treturn -c/2 * ((--t)*(t-2) - 1) + b;\n\t},\n\teaseInCubic: function (x, t, b, c, d) {\n\t\treturn c*(t/=d)*t*t + b;\n\t},\n\teaseOutCubic: function (x, t, b, c, d) {\n\t\treturn c*((t=t/d-1)*t*t + 1) + b;\n\t},\n\teaseInOutCubic: function (x, t, b, c, d) {\n\t\tif ((t/=d/2) < 1) return c/2*t*t*t + b;\n\t\treturn c/2*((t-=2)*t*t + 2) + b;\n\t},\n\teaseInQuart: function (x, t, b, c, d) {\n\t\treturn c*(t/=d)*t*t*t + b;\n\t},\n\teaseOutQuart: function (x, t, b, c, d) {\n\t\treturn -c * ((t=t/d-1)*t*t*t - 1) + b;\n\t},\n\teaseInOutQuart: function (x, t, b, c, d) {\n\t\tif ((t/=d/2) < 1) return c/2*t*t*t*t + b;\n\t\treturn -c/2 * ((t-=2)*t*t*t - 2) + b;\n\t},\n\teaseInQuint: function (x, t, b, c, d) {\n\t\treturn c*(t/=d)*t*t*t*t + b;\n\t},\n\teaseOutQuint: function (x, t, b, c, d) {\n\t\treturn c*((t=t/d-1)*t*t*t*t + 1) + b;\n\t},\n\teaseInOutQuint: function (x, t, b, c, d) {\n\t\tif ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;\n\t\treturn c/2*((t-=2)*t*t*t*t + 2) + b;\n\t},\n\teaseInSine: function (x, t, b, c, d) {\n\t\treturn -c * Math.cos(t/d * (Math.PI/2)) + c + b;\n\t},\n\teaseOutSine: function (x, t, b, c, d) {\n\t\treturn c * Math.sin(t/d * (Math.PI/2)) + b;\n\t},\n\teaseInOutSine: function (x, t, b, c, d) {\n\t\treturn -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;\n\t},\n\teaseInExpo: function (x, t, b, c, d) {\n\t\treturn (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;\n\t},\n\teaseOutExpo: function (x, t, b, c, d) {\n\t\treturn (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;\n\t},\n\teaseInOutExpo: function (x, t, b, c, d) {\n\t\tif (t==0) return b;\n\t\tif (t==d) return b+c;\n\t\tif ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;\n\t\treturn c/2 * (-Math.pow(2, -10 * --t) + 2) + b;\n\t},\n\teaseInCirc: function (x, t, b, c, d) {\n\t\treturn -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;\n\t},\n\teaseOutCirc: function (x, t, b, c, d) {\n\t\treturn c * Math.sqrt(1 - (t=t/d-1)*t) + b;\n\t},\n\teaseInOutCirc: function (x, t, b, c, d) {\n\t\tif ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;\n\t\treturn c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;\n\t},\n\teaseInElastic: function (x, t, b, c, d) {\n\t\tvar s=1.70158;var p=0;var a=c;\n\t\tif (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;\n\t\tif (a < Math.abs(c)) { a=c; var s=p/4; }\n\t\telse var s = p/(2*Math.PI) * Math.asin (c/a);\n\t\treturn -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;\n\t},\n\teaseOutElastic: function (x, t, b, c, d) {\n\t\tvar s=1.70158;var p=0;var a=c;\n\t\tif (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;\n\t\tif (a < Math.abs(c)) { a=c; var s=p/4; }\n\t\telse var s = p/(2*Math.PI) * Math.asin (c/a);\n\t\treturn a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;\n\t},\n\teaseInOutElastic: function (x, t, b, c, d) {\n\t\tvar s=1.70158;var p=0;var a=c;\n\t\tif (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);\n\t\tif (a < Math.abs(c)) { a=c; var s=p/4; }\n\t\telse var s = p/(2*Math.PI) * Math.asin (c/a);\n\t\tif (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;\n\t\treturn a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;\n\t},\n\teaseInBack: function (x, t, b, c, d, s) {\n\t\tif (s == undefined) s = 1.70158;\n\t\treturn c*(t/=d)*t*((s+1)*t - s) + b;\n\t},\n\teaseOutBack: function (x, t, b, c, d, s) {\n\t\tif (s == undefined) s = 1.70158;\n\t\treturn c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;\n\t},\n\teaseInOutBack: function (x, t, b, c, d, s) {\n\t\tif (s == undefined) s = 1.70158;\n\t\tif ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;\n\t\treturn c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;\n\t},\n\teaseInBounce: function (x, t, b, c, d) {\n\t\treturn c - L.Motion.Ease.easeOutBounce (x, d-t, 0, c, d) + b;\n\t},\n\teaseOutBounce: function (x, t, b, c, d) {\n\t\tif ((t/=d) < (1/2.75)) {\n\t\t\treturn c*(7.5625*t*t) + b;\n\t\t} else if (t < (2/2.75)) {\n\t\t\treturn c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;\n\t\t} else if (t < (2.5/2.75)) {\n\t\t\treturn c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;\n\t\t} else {\n\t\t\treturn c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;\n\t\t}\n\t},\n\teaseInOutBounce: function (x, t, b, c, d) {\n\t\tif (t < d/2) return L.Motion.Ease.easeInBounce (x, t*2, 0, c, d) * .5 + b;\n\t\treturn L.Motion.Ease.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;\n\t}\n};\n\n\n//# sourceURL=webpack:///./src/leaflet.motion.easing.js?");

/***/ }),

/***/ "./src/leaflet.motion.js":
/*!*******************************!*\
  !*** ./src/leaflet.motion.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\r\n**/\r\n\r\nL.Motion = L.Motion || {\r\n\tEvent: {\r\n\t\t\tStarted:\"motion-started\",\r\n\t\t\tPaused: \"motion-paused\",\r\n\t\t\tResumed: \"motion-resumed\",\r\n\t\t\tSection: \"motion-section\",\r\n\t\t\tEnded: \"motion-ended\"\r\n\t\t}\r\n\t};\r\n\r\nL.motion = L.motion || {};\r\nL.Motion.Animate = {\r\n\toptions: {\r\n\t\tpane: \"polymotionPane\",\r\n\t\tattribution: \"Leaflet.Motion © \" + (new Date()).getFullYear() + \" Igor Vladyka\"\r\n\t},\r\n\r\n\tmotionOptions: {\r\n\t\tauto: false,\r\n\t\teasing: function(x){ return x; }, // linear\r\n\t\tspeed: 0, // KM/H\r\n\t\tduration: 0 // ms\r\n\t},\r\n\r\n\tmarkerOptions: undefined,\r\n\r\n\tinitialize: function (latlngs, options, motionOptions, markerOptions) {\r\n\t\tL.Util.setOptions(this, options);\r\n\t\tthis.motionOptions = L.Util.extend({}, this.motionOptions, motionOptions || {});\r\n\t\tthis.markerOptions = L.Util.extend({}, markerOptions || {});\r\n\r\n\t\tthis._bounds = L.latLngBounds();\r\n\t\tthis._linePoints = this._convertLatLngs(latlngs);\r\n\t\tif (!L.Motion.Utils.isFlat(this._linePoints)) {\r\n\t\t\tthis._linePoints = this._linePoints[0];\r\n\t\t}\r\n\r\n\t\tthis._initializeMarker();\r\n\t\tthis._latlngs = [];\r\n\t\tL.Util.stamp(this); // Enforce proper animation order;\r\n\t},\r\n\r\n\taddLatLng: function(latLng, ring) {\r\n\t\tlatLng = L.Motion.Utils.toLatLng(latLng);\r\n\t\tthis._linePoints.push(latLng);\r\n\t\tif (this._latlngs.length) {\r\n\t\t\tthis._latlngs.push(latLng);\r\n\t\t}\r\n\t\treturn this;\r\n\t},\r\n\r\n\t/**\r\n        @param {Map} map the Leaflet Map\r\n    */\r\n\tbeforeAdd: function (map) {\r\n\t\tif (!map.getPane(this.options.pane)) {\r\n\t\t\tmap.createPane(this.options.pane).style.zIndex = 599;\r\n\t\t}\r\n\r\n\t\tthis._renderer = map.getRenderer(this);\r\n\t},\r\n\r\n\t/**\r\n        @param {Map} map the Leaflet Map\r\n\t\t@return {MotionObject} this\r\n    */\r\n    onAdd: function (map) {\r\n\t\tthis._renderer._initPath(this);\r\n\t\tthis._reset();\r\n\t\tthis._renderer._addPath(this);\r\n\t\tif (this.__marker && this.markerOptions.showMarker) {\r\n\t\t\tthis.__marker.addTo(map);\r\n\t\t}\r\n\r\n\t\tif(this.__marker._icon && this.__marker._icon.children.length){\r\n\t\t\tvar baseRotationAngle = this.__marker._icon.children[0].getAttribute(\"motion-base\");\r\n\t\t\tif(baseRotationAngle){\r\n\t\t\t\tthis.__marker._icon.children[0].style.transform = \"rotate(\" + baseRotationAngle + \"deg)\";\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tif (this.motionOptions.auto) {\r\n\t\t\tthis.motionStart();\r\n\t\t}\r\n\r\n        return this;\r\n    },\r\n\r\n\t/**\r\n        @param {Map} map the Leaflet Map\r\n    */\r\n\tonRemove: function (map) {\r\n\t\tthis.motionStop();\r\n\t\tif (this.__marker) {\r\n\t\t\tmap.removeLayer(this.__marker);\r\n\t\t}\r\n\r\n\t\tthis._renderer._removePath(this);\r\n\t},\r\n\r\n\t/**\r\n        @param {DateTime} startTime time from start animation\r\n    */\r\n    _motion: function (startTime) {\r\n\t\tvar ellapsedTime = (new Date()).getTime() - startTime;\r\n        var durationRatio = 1; // 0 - 1\r\n\t\tif (this.motionOptions.duration) {\r\n\t\t\tdurationRatio = ellapsedTime / this.motionOptions.duration;\r\n\t\t}\r\n\r\n\t\tif (durationRatio < 1) {\r\n\t\t\tdurationRatio = this.motionOptions.easing(durationRatio, ellapsedTime, 0, 1, this.motionOptions.duration);\r\n\t\t\tvar nextPoint = L.Motion.Utils.interpolateOnLine(this._map, this._linePoints, durationRatio);\r\n\r\n\t\t\tL.Polyline.prototype.addLatLng.call(this, nextPoint.latLng);\r\n\t\t\tthis._drawMarker(nextPoint.latLng);\r\n\r\n\t\t\tthis.__ellapsedTime = ellapsedTime;\r\n\t\t\tthis.animation = L.Util.requestAnimFrame(function(){\r\n\t\t\t\tthis._motion(startTime);\r\n\t\t\t}, this);\r\n\t\t} else {\r\n\t\t\tthis.motionStop(true);\r\n\t\t}\r\n    },\r\n\r\n\t/**\r\n\t\tDraws marker according to line position\r\n        @param {LatLng} nextPoint next animation point\r\n    */\r\n\t_drawMarker: function (nextPoint) {\r\n\t\tvar marker = this.getMarker();\r\n\t\tif (marker) {\r\n\t\t\tvar prevPoint = marker.getLatLng();\r\n\r\n\t\t\t// [0, 0] Means that marker is not added yet to the map\r\n\t\t\tvar initialPoints = this._linePoints[0];\r\n\t\t\tif (prevPoint.lat === initialPoints.lat && prevPoint.lng === initialPoints.lng) {\r\n\t\t\t\tmarker.addTo(this._map);\r\n\t\t\t\tmarker.addEventParent(this);\r\n\t\t\t} else {\r\n\t\t\t\tif (marker._icon && marker._icon.children.length) {\r\n\t\t\t\t\tvar needToRotateMarker = marker._icon.children[0].getAttribute(\"motion-base\");\r\n\r\n\t\t\t\t\tif (needToRotateMarker) {\r\n\t\t\t\t\t\tvar motionMarkerOnLine = 0;\r\n\t\t\t\t\t\tif (needToRotateMarker && !isNaN(+needToRotateMarker)) {\r\n\t\t\t\t\t\t\tmotionMarkerOnLine = +needToRotateMarker;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tmarker._icon.children[0].style.transform = \"rotate(-\" + Math.round(L.Motion.Utils.getAngle(prevPoint, nextPoint) + motionMarkerOnLine) +\"deg)\";\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tmarker.setLatLng(nextPoint);\r\n\t\t}\r\n\t},\r\n\r\n\t/**\r\n        Removes marker from the map\r\n    */\r\n\t_removeMarker: function (animEnded) {\r\n\t\tif (this.markerOptions && this.__marker) {\r\n\t\t\tif (!animEnded || this.markerOptions.removeOnEnd) {\r\n\t\t\t\tthis._map.removeLayer(this.__marker);\r\n\t\t\t}\r\n\t\t}\r\n\t},\r\n\r\n\t/**\r\n        Initialize marker from marker options and add it to the map if needed\r\n    */\r\n\t_initializeMarker: function () {\r\n\t\tif (this.markerOptions) {\r\n\t\t\tthis.__marker = L.marker(this._linePoints[0], this.markerOptions);\r\n\t\t}\r\n\t},\r\n\r\n\t/**\r\n        Starts animation of current object\r\n    */\r\n\tmotionStart: function () {\r\n\t\tif (this._map && !this.animation) {\r\n\t\t\tif (!this.motionOptions.duration) {\r\n\t\t\t\tif (this.motionOptions.speed) {\r\n\t\t\t\t\tthis.motionOptions.duration = L.Motion.Utils.getDuration(this._linePoints, this.motionOptions.speed);\r\n\t\t\t\t} else {\r\n\t\t\t\t\tthis.motionOptions.duration = 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tthis.setLatLngs([]);\r\n\t        this._motion((new Date).getTime());\r\n\t\t\tthis.fire(L.Motion.Event.Started, {layer: this}, false);\r\n\t\t}\r\n\r\n\t\treturn this;\r\n    },\r\n\r\n\t/**\r\n        Stops animation of current object\r\n        @param {LatLng[]} points full object points collection or empty collection for cleanup\r\n    */\r\n    motionStop: function (animEnded) {\r\n\t\tthis.motionPause();\r\n\t\tthis.setLatLngs(this._linePoints);\r\n\t\tthis.__ellapsedTime = null;\r\n\t\tthis._removeMarker(animEnded);\r\n\t\tthis.fire(L.Motion.Event.Ended, {layer: this}, false);\r\n\r\n\t\treturn this;\r\n    },\r\n\r\n\t/**\r\n        Pauses animation of current object\r\n    */\r\n\tmotionPause: function () {\r\n\t\tif (this.animation) {\r\n\t\t\tL.Util.cancelAnimFrame(this.animation);\r\n\t\t\tthis.animation = null;\r\n\t\t\tthis.fire(L.Motion.Event.Paused, {layer: this}, false);\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t/**\r\n        Resume animation of current object\r\n    */\r\n\tmotionResume: function () {\r\n\t\tif (!this.animation && this.__ellapsedTime) {\r\n\t\t\tif (!this.motionOptions.duration) {\r\n\t\t\t\tif (this.motionOptions.speed) {\r\n\t\t\t\t\tthis.motionOptions.duration = L.Motion.Utils.getDuration(this._linePoints, this.motionOptions.speed);\r\n\t\t\t\t} else {\r\n\t\t\t\t\tthis.motionOptions.duration = 0;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tthis._motion((new Date).getTime() - (this.__ellapsedTime));\r\n\t\t\tthis.fire(L.Motion.Event.Resumed, {layer: this}, false);\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\t/**\r\n        Toggles animation of current object; Start/Pause/Resume;\r\n    */\r\n\tmotionToggle: function () {\r\n\t\tif (this.animation) {\r\n\t\t\tif (this.__ellapsedTime) {\r\n\t\t\t\tthis.motionPause();\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tif (this.__ellapsedTime) {\r\n\t\t\t\tthis.motionResume();\r\n\t\t\t} else {\r\n\t\t\t\tthis.motionStart();\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn this;\r\n\t},\r\n\r\n\tmotionDuration: function (duration) {\r\n\t\tthis.motionOptions.duration = duration || 0;\r\n\t\treturn this;\r\n\t},\r\n\r\n\tmotionSpeed: function (speed) {\r\n\t\tthis.motionOptions.speed = speed || 0;\r\n\t\treturn this;\r\n\t},\r\n\r\n\t/**\r\n\t\tReturns current constructed marker\r\n\t*/\r\n\tgetMarker: function () {\r\n\t\treturn this.__marker;\r\n\t},\r\n\r\n\t/**\r\n\t\tReturns markers array from all inner layers without flattering.\r\n\t*/\r\n\tgetMarkers: function () {\r\n\t\treturn [this.getMarker()];\r\n\t}\r\n}\r\n\n\n//# sourceURL=webpack:///./src/leaflet.motion.js?");

/***/ }),

/***/ "./src/leaflet.motion.utils.js":
/*!*************************************!*\
  !*** ./src/leaflet.motion.utils.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\r\n\tMIT License http://www.opensource.org/licenses/mit-license.php\r\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\r\n**/\r\n\r\nL.Motion.Utils = {\r\n\t/**\r\n\t\tAttaches distances precalculated to current set of LatLng\r\n\t\t@param {L.Map} map Leaflet map to be calculate distances\r\n\t\t@param {Array<L.LatLng>|L.PolyLine} latlngs Set of geographical points\r\n\t\t@returns {Array<L.LatLng>|L.PolyLine} latlngs Set of geographical points with attached distances\r\n\t*/\r\n\tattachDistances: function(map, latLngs) {\r\n\t\tif (latLngs.length > 1) {\r\n\t\t\tfor (var i = 1; i < latLngs.length; i++) {\r\n\t\t\t\tlatLngs[i - 1].distanceToNextPoint = map.distance(latLngs[i - 1], latLngs[i]);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn latLngs;\r\n\t},\r\n\r\n\t/**\r\n\t\tReturns the coordinate of the point located on a line at the specified ratio of the line length.\r\n\t\t@param {L.Map} map Leaflet map to be used for this method\r\n\t\t@param {Array<L.LatLng>|L.PolyLine} latlngs Set of geographical points\r\n\t\t@param {Number} ratio the length ratio, expressed as a decimal between 0 and 1, inclusive\r\n\t\t@returns {Object} an object with latLng ({LatLng}) and predecessor ({Number}), the index of the preceding vertex in the Polyline\r\n\t\t(-1 if the interpolated point is the first vertex)\r\n\t*/\r\n\tinterpolateOnLine: function (map, latLngs, ratio) {\r\n\t\tlatLngs = (latLngs instanceof L.Polyline) ? latLngs.getLatLngs() : latLngs;\r\n\t\tif (latLngs.length < 2) {\r\n\t\t\treturn null;\r\n\t\t}\r\n\r\n\t\tvar allDistancesCalculated = true;\r\n\t\tfor (var d = 0; d < latLngs.length - 1; d++) {\r\n\t\t\tif (!latLngs[d].distanceToNextPoint) {\r\n\t\t\t\tallDistancesCalculated = false;\r\n\t\t\t\tbreak;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tif (!allDistancesCalculated) {\r\n\t\t\tthis.attachDistances(map, latLngs);\r\n\t\t}\r\n\r\n\t\t// ensure the ratio is between 0 and 1;\r\n\t\tratio = Math.max(Math.min(ratio, 1), 0);\r\n\r\n\t\tif (ratio === 0) {\r\n\t\t\treturn {\r\n\t\t\t\tlatLng: latLngs[0] instanceof L.LatLng ? latLngs[0] : L.latLng(latLngs[0]),\r\n\t\t\t\tpredecessor: -1\r\n\t\t\t};\r\n\t\t}\r\n\r\n\t\tif (ratio == 1) {\r\n\t\t\treturn {\r\n\t\t\t\tlatLng: latLngs[latLngs.length -1] instanceof L.LatLng ? latLngs[latLngs.length -1] : L.latLng(latLngs[latLngs.length -1]),\r\n\t\t\t\tpredecessor: latLngs.length - 2\r\n\t\t\t};\r\n\t\t}\r\n\r\n\t\t// get full line length between points\r\n\t\tvar fullLength = 0;\r\n\t\tfor (var dIndex = 0; dIndex < latLngs.length - 1; dIndex++) {\r\n\t\t\tfullLength += latLngs[dIndex].distanceToNextPoint;\r\n\t\t}\r\n\r\n\t\t// Calculate expected ratio\r\n\t\tvar ratioDist = fullLength * ratio;\r\n\r\n\t\t// follow the line segments [ab], adding lengths,\r\n\t\t// until we find the segment where the points should lie on\r\n\t\tvar cumulativeDistanceToA = 0, cumulativeDistanceToB = 0;\r\n\t\tfor (var i = 0; cumulativeDistanceToB < ratioDist; i++) {\r\n\t\t\tvar pointA = latLngs[i], pointB = latLngs[i+1];\r\n\r\n\t\t\tcumulativeDistanceToA = cumulativeDistanceToB;\r\n\t\t\tcumulativeDistanceToB += pointA.distanceToNextPoint;\r\n\t\t}\r\n\r\n\t\tif (pointA == undefined && pointB == undefined) { // Happens when line has no length\r\n\t\t\tvar pointA = latLngs[0], pointB = latLngs[1], i = 1;\r\n\t\t}\r\n\r\n\t\t// compute the ratio relative to the segment [ab]\r\n\t\tvar segmentRatio = ((cumulativeDistanceToB - cumulativeDistanceToA) !== 0) ? ((ratioDist - cumulativeDistanceToA) / (cumulativeDistanceToB - cumulativeDistanceToA)) : 0;\r\n\t\treturn {\r\n\t\t\tlatLng: this.interpolateOnLatLngSegment(pointA, pointB, segmentRatio),\r\n\t\t\tpredecessor: i-1\r\n\t\t};\r\n\t},\r\n\r\n    /**\r\n        Returns the Point located on a segment at the specified ratio of the segment length.\r\n        @param {L.Point} pA coordinates of point A\r\n        @param {L.Point} pB coordinates of point B\r\n        @param {Number} the length ratio, expressed as a decimal between 0 and 1, inclusive.\r\n        @returns {L.Point} the interpolated point.\r\n    */\r\n    interpolateOnPointSegment: function (pA, pB, ratio) {\r\n        return L.point(\r\n            (pA.x * (1 - ratio)) + (ratio * pB.x),\r\n            (pA.y * (1 - ratio)) + (ratio * pB.y)\r\n        );\r\n    },\r\n\r\n    /**\r\n        Returns the LatLng located on a segment at the specified ratio of the segment length.\r\n        @param {L.LatLng} pA coordinates of LatLng A\r\n        @param {L.LatLng} pB coordinates of LatLng B\r\n        @param {Number} the length ratio, expressed as a decimal between 0 and 1, inclusive.\r\n        @returns {L.LatLng} the interpolated LatLng.\r\n    */\r\n    interpolateOnLatLngSegment: function (pA, pB, ratio) {\r\n        return L.latLng(\r\n            (pA.lat * (1 - ratio)) + (ratio * pB.lat),\r\n            (pA.lng * (1 - ratio)) + (ratio * pB.lng)\r\n        );\r\n    },\r\n\r\n\t/**\r\n        @param {LatLng[]} linePoints of coordinates\r\n        @return {Number} distance in meter\r\n    */\r\n\tdistance: function(linePoints){\r\n\t\tvar distanceInMeter = 0;\r\n        for (var i = 1; i < linePoints.length; i++) {\r\n            distanceInMeter +=  map.distance(linePoints[i], linePoints[i - 1]);\r\n        }\r\n\r\n        return distanceInMeter;\r\n\t},\r\n\r\n\t/**\r\n        @param {LatLng[]} collection of coordinates\r\n        @param {Number} speed in KM/H\r\n        @return {Number} duration in ms\r\n    */\r\n\tgetDuration: function (collection, speed) {\r\n\t\tvar distance = L.Motion.Utils.distance(collection.map(function(m){ return L.Motion.Utils.toLatLng(m); })); // in meters;\r\n\t\treturn distance/(speed/3600); // m / (km/h * 1000 => m/h / (60 * 60)) => m / k/s (m/s * 1000) => 1000 * m / m/s => ms;\r\n\t},\r\n\r\n\ttoLatLng: function(a, b, c) {\r\n\t\tif (a instanceof L.LatLng) {\r\n\t\t\treturn a;\r\n\t\t}\r\n\t\tif (L.Util.isArray(a) && typeof a[0] !== 'object') {\r\n\t\t\tif (a.length === 3) {\r\n\t\t\t\treturn L.latLng(a[0], a[1], a[2]);\r\n\t\t\t}\r\n\t\t\tif (a.length === 2) {\r\n\t\t\t\treturn L.latLng(a[0], a[1]);\r\n\t\t\t}\r\n\t\t\treturn null;\r\n\t\t}\r\n\t\tif (a === undefined || a === null) {\r\n\t\t\treturn a;\r\n\t\t}\r\n\t\tif (typeof a === 'object' && 'lat' in a) {\r\n\t\t\treturn L.latLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);\r\n\t\t}\r\n\t\tif (b === undefined) {\r\n\t\t\treturn null;\r\n\t\t}\r\n\t\treturn L.latLng(a, b, c);\r\n\t},\r\n\r\n\tgetAngle: function(prevPoint, nextPoint) {\r\n\t\tvar angle = Math.atan2(nextPoint.lat - prevPoint.lat, nextPoint.lng - prevPoint.lng) * 180 / Math.PI;\r\n\t\tif (angle < 0) {\r\n\t\t\tangle += 360;\r\n\t\t}\r\n\r\n\t\treturn angle;\r\n\t},\r\n\r\n\t// Leaflet -> geometries -> LineUtil\r\n\tisFlat: function (latlngs) {\r\n\t\treturn !L.Util.isArray(latlngs[0]) || (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');\r\n\t}\r\n};\r\n\n\n//# sourceURL=webpack:///./src/leaflet.motion.utils.js?");

/***/ }),

/***/ 0:
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/leaflet.motion.js ./src/leaflet.motion.utils.js ./src/leaflet.motion.easing.js ./src/layer/leaflet.motion.polyline.js ./src/layer/leaflet.motion.polygon.js ./src/layer/leaflet.motion.group.js ./src/layer/leaflet.motion.seq.js ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/leaflet.motion.js */\"./src/leaflet.motion.js\");\n__webpack_require__(/*! ./src/leaflet.motion.utils.js */\"./src/leaflet.motion.utils.js\");\n__webpack_require__(/*! ./src/leaflet.motion.easing.js */\"./src/leaflet.motion.easing.js\");\n__webpack_require__(/*! ./src/layer/leaflet.motion.polyline.js */\"./src/layer/leaflet.motion.polyline.js\");\n__webpack_require__(/*! ./src/layer/leaflet.motion.polygon.js */\"./src/layer/leaflet.motion.polygon.js\");\n__webpack_require__(/*! ./src/layer/leaflet.motion.group.js */\"./src/layer/leaflet.motion.group.js\");\nmodule.exports = __webpack_require__(/*! ./src/layer/leaflet.motion.seq.js */\"./src/layer/leaflet.motion.seq.js\");\n\n\n//# sourceURL=webpack:///multi_./src/leaflet.motion.js_./src/leaflet.motion.utils.js_./src/leaflet.motion.easing.js_./src/layer/leaflet.motion.polyline.js_./src/layer/leaflet.motion.polygon.js_./src/layer/leaflet.motion.group.js_./src/layer/leaflet.motion.seq.js?");

/***/ })

/******/ });