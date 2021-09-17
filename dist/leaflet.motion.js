/*!
 * 
 *  leaflet.motion - v0.2.4 (https://github.com/Igor-Vladyka/leaflet.motion#readme) 
 *  Animation plugin for Leaflet.js
 *  
 *  MIT (http://www.opensource.org/licenses/mit-license.php)
 *  (c) 2021  Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/)
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

eval("/**\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\n**/\n\nL.Motion.Seq = L.Motion.Group.extend ({\n\t_activeLayer: null,\n\n\t/**\n\t\tStart first motion in current group;\n\t*/\n\tmotionStart: function () {\n\t\t// If we're already animating, don't do anything.\n\t\tif (this._activeLayer) {\n\t\t\treturn;\n\t\t}\n\t\tvar layer = this.getFirstLayer();\n\t\tif (layer) {\n\t\t\tthis.__prepareStart();\n\t\t\tlayer.motionStart();\n\t\t\tthis.fire(L.Motion.Event.Started, {layer: this}, false);\n\t\t}\n\n\t\treturn this;\n\t},\n\n\t/**\n\t\tStops all motions in current group;\n\t*/\n\tmotionStop: function() {\n\t\tthis.invoke(\"motionStop\");\n\t\tthis._activeLayer = null;\n\t\tthis.fire(L.Motion.Event.Ended, {layer: this}, false);\n\n\t\treturn this;\n\t},\n\n\t/**\n\t\tPause current motion in current group;\n\t*/\n\tmotionPause: function() {\n\t\tif (this._activeLayer) {\n\t\t\tthis._activeLayer.motionPause();\n\t\t\tthis.fire(L.Motion.Event.Paused, {layer: this}, false);\n\t\t}\n\n\t\treturn this;\n\t},\n\n\t/**\n\t\tResume last motion in current group;\n\t*/\n\tmotionResume: function() {\n\t\tif (this._activeLayer) {\n\t\t\tthis._activeLayer.motionResume();\n\t\t\tthis.fire(L.Motion.Event.Resumed, {layer: this}, false);\n\t\t}\n\n\t\treturn this;\n\t},\n\n\t/**\n\t\tReset all motions in current group;\n\t*/\n\tmotionToggle: function () {\n\t\tif (this._activeLayer) {\n\t\t\tthis.motionPause();\n\t\t} else {\n\t\t\tthis.motionResume();\n\t\t}\n\n\t\treturn this;\n\t},\n\n\tgetFirstLayer: function() {\n\t\tvar allLayers = this.getLayers();\n\t\treturn allLayers.length ? allLayers[0] : null;\n\t},\n\n\taddLayer: function (l) {\n\t\tthis.__prepareLayer(l);\n\t\tL.Motion.Group.prototype.addLayer.call(this, l);\n\t\tif (!this._activeLayer) {\n\t\t\tl.motionStart();\n\t\t}\n\t},\n\n\t__prepareStart: function() {\n\t\tvar self = this;\n\t\tthis.getLayers().forEach(function (l) {\n\t\t\tself.__prepareLayer(l);\n\t\t});\n\t},\n\n\t/**\n\t * Initialise a layer so it's ready to be part of this motion sequence\n\t */\n\t__prepareLayer: function (l) {\n\t\tl.setLatLngs([]);\n\t\t// When a layer finishes have it remove itself and call motionStart() on the next layer\n\t\tl.off(L.Motion.Event.Ended, this.__clearActiveLayer__, this);\n\t\tl.on(L.Motion.Event.Ended, this.__clearActiveLayer__, this);\n\n\t\t// When a layer is started (by the last one ending) set it as the active layer\n\t\tl.off(L.Motion.Event.Started, this.__putActiveLayer__, this);\n\t\tl.on(L.Motion.Event.Started, this.__putActiveLayer__, this);\n\t},\n\n\t/**\n\t * Called by a layer (e.g. one of the sequence events) when it finishes. Is responsible for\n\t * cleaning up after itself and starting the next layer.\n\t */\n\t__clearActiveLayer__: function (e) {\n\t\tthis._activeLayer = null;\n\t\tvar layers = this.getLayers();\n\t\tvar currentId = e.layer._leaflet_id;\n\t\tvar currentObject = layers.filter(function(f){ return f._leaflet_id == currentId })[0];\n\t\tvar nextIndex = layers.indexOf(currentObject) + 1;\n\t\tif (layers.length > nextIndex) {\n\t\t\tlayers[nextIndex].motionStart();\n\t\t} else {\n\t\t\tthis.fire(L.Motion.Event.Ended, {layer: this}, false);\n\t\t}\n\t},\n\n\t/**\n\t * Called by a layer when it's started, sets itself as the active layer on the sequence\n\t * group and trigger any other events which need triggering.\n\t */\n\t__putActiveLayer__: function (e) {\n\t\tthis._activeLayer = e.layer;\n\t\tthis.fire(L.Motion.Event.Section, {layer: this._activeLayer}, false);\n\t}\n});\n\nL.motion.seq = function(motion, options){\n    return new L.Motion.Seq(motion, options);\n};\n\n\n//# sourceURL=webpack:///./src/layer/leaflet.motion.seq.js?");

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

eval("/**\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\n**/\n\nL.Motion = L.Motion || {\n\tEvent: {\n\t\t\tStarted:\"motion-started\",\n\t\t\tPaused: \"motion-paused\",\n\t\t\tResumed: \"motion-resumed\",\n\t\t\tSection: \"motion-section\",\n\t\t\tEnded: \"motion-ended\"\n\t\t}\n\t};\n\nL.motion = L.motion || {};\nL.Motion.Animate = {\n\toptions: {\n\t\tpane: \"polymotionPane\",\n\t\tattribution: \"Leaflet.Motion © \" + (new Date()).getFullYear() + \" Igor Vladyka\"\n\t},\n\n\tmotionOptions: {\n\t\tauto: false,\n\t\teasing: function(x){ return x; }, // linear\n\t\tspeed: 0, // KM/H\n\t\tduration: 0 // ms\n\t},\n\n\tmarkerOptions: undefined,\n\n\tinitialize: function (latlngs, options, motionOptions, markerOptions) {\n\t\tL.Util.setOptions(this, options);\n\t\tthis.motionOptions = L.Util.extend({}, this.motionOptions, motionOptions || {});\n\t\tthis.markerOptions = L.Util.extend({}, markerOptions || {});\n\n\t\tthis._bounds = L.latLngBounds();\n\t\tthis._linePoints = this._convertLatLngs(latlngs);\n\t\tif (!L.Motion.Utils.isFlat(this._linePoints)) {\n\t\t\tthis._linePoints = this._linePoints[0];\n\t\t}\n\n\t\tthis._initializeMarker();\n\t\tthis._latlngs = [];\n\t\tL.Util.stamp(this); // Enforce proper animation order;\n\t},\n\n\taddLatLng: function(latLng, ring) {\n\t\tlatLng = L.Motion.Utils.toLatLng(latLng);\n\t\tthis._linePoints.push(latLng);\n\t\tif (this._latlngs.length) {\n\t\t\tthis._latlngs.push(latLng);\n\t\t}\n\t\treturn this;\n\t},\n\n\t/**\n        @param {Map} map the Leaflet Map\n    */\n\tbeforeAdd: function (map) {\n\t\tif (!map.getPane(this.options.pane)) {\n\t\t\tmap.createPane(this.options.pane).style.zIndex = 599;\n\t\t}\n\n\t\tthis._renderer = map.getRenderer(this);\n\t},\n\n\t/**\n        @param {Map} map the Leaflet Map\n\t\t@return {MotionObject} this\n    */\n    onAdd: function (map) {\n\t\tthis._renderer._initPath(this);\n\t\tthis._reset();\n\t\tthis._renderer._addPath(this);\n\t\tif (this.__marker && this.markerOptions.showMarker) {\n\t\t\tthis.__marker.addTo(map);\n\t\t}\n\n\t\tif(this.__marker._icon && this.__marker._icon.children.length){\n\t\t\tvar baseRotationAngle = this.__marker._icon.children[0].getAttribute(\"motion-base\");\n\t\t\tif(baseRotationAngle){\n\t\t\t\tthis.__marker._icon.children[0].style.transform = \"rotate(\" + baseRotationAngle + \"deg)\";\n\t\t\t}\n\t\t}\n\n\t\tif (this.motionOptions.auto) {\n\t\t\tthis.motionStart();\n\t\t}\n\n        return this;\n    },\n\n\t/**\n        @param {Map} map the Leaflet Map\n    */\n\tonRemove: function (map) {\n\t\tthis.motionStop();\n\t\tif (this.__marker) {\n\t\t\tmap.removeLayer(this.__marker);\n\t\t}\n\n\t\tthis._renderer._removePath(this);\n\t},\n\n\t/**\n        @param {DateTime} startTime time from start animation\n    */\n    _motion: function (startTime) {\n\t\tvar ellapsedTime = (new Date()).getTime() - startTime;\n        var durationRatio = 1; // 0 - 1\n\t\tif (this.motionOptions.duration) {\n\t\t\tdurationRatio = ellapsedTime / this.motionOptions.duration;\n\t\t}\n\n\t\tif (durationRatio < 1) {\n\t\t\tdurationRatio = this.motionOptions.easing(durationRatio, ellapsedTime, 0, 1, this.motionOptions.duration);\n\t\t\tvar nextPoint = L.Motion.Utils.interpolateOnLine(this._map, this._linePoints, durationRatio);\n\n\t\t\tL.Polyline.prototype.addLatLng.call(this, nextPoint.latLng);\n\t\t\tthis._drawMarker(nextPoint.latLng);\n\n\t\t\tthis.__ellapsedTime = ellapsedTime;\n\t\t\tthis.animation = L.Util.requestAnimFrame(function(){\n\t\t\t\tthis._motion(startTime);\n\t\t\t}, this);\n\t\t} else {\n\t\t\tthis.motionStop(true);\n\t\t}\n    },\n\n\t/**\n\t\tDraws marker according to line position\n        @param {LatLng} nextPoint next animation point\n    */\n\t_drawMarker: function (nextPoint) {\n\t\tvar marker = this.getMarker();\n\t\tif (marker) {\n\t\t\tvar prevPoint = marker.getLatLng();\n\n\t\t\t// [0, 0] Means that marker is not added yet to the map\n\t\t\tvar initialPoints = this._linePoints[0];\n\t\t\tif (prevPoint.lat === initialPoints.lat && prevPoint.lng === initialPoints.lng) {\n\t\t\t\tmarker.addTo(this._map);\n\t\t\t\tmarker.addEventParent(this);\n\t\t\t} else {\n\t\t\t\tif (marker._icon && marker._icon.children.length) {\n\t\t\t\t\tvar needToRotateMarker = marker._icon.children[0].getAttribute(\"motion-base\");\n\n\t\t\t\t\tif (needToRotateMarker) {\n\t\t\t\t\t\tvar motionMarkerOnLine = 0;\n\t\t\t\t\t\tif (needToRotateMarker && !isNaN(+needToRotateMarker)) {\n\t\t\t\t\t\t\tmotionMarkerOnLine = +needToRotateMarker;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tmarker._icon.children[0].style.transform = \"rotate(-\" + Math.round(L.Motion.Utils.getAngle(prevPoint, nextPoint) + motionMarkerOnLine) +\"deg)\";\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tmarker.setLatLng(nextPoint);\n\t\t}\n\t},\n\n\t/**\n        Removes marker from the map\n    */\n\t_removeMarker: function (animEnded) {\n\t\tif (this.markerOptions && this.__marker) {\n\t\t\tif (!animEnded || this.markerOptions.removeOnEnd) {\n\t\t\t\tthis._map.removeLayer(this.__marker);\n\t\t\t}\n\t\t}\n\t},\n\n\t/**\n        Initialize marker from marker options and add it to the map if needed\n    */\n\t_initializeMarker: function () {\n\t\tif (this.markerOptions) {\n\t\t\tthis.__marker = L.marker(this._linePoints[0], this.markerOptions);\n\t\t}\n\t},\n\n\t/**\n        Starts animation of current object\n    */\n\tmotionStart: function () {\n\t\tif (this._map && !this.animation) {\n\t\t\tif (!this.motionOptions.duration) {\n\t\t\t\tif (this.motionOptions.speed) {\n\t\t\t\t\tthis.motionOptions.duration = L.Motion.Utils.getDuration(this._map, this._linePoints, this.motionOptions.speed);\n\t\t\t\t} else {\n\t\t\t\t\tthis.motionOptions.duration = 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\tthis.setLatLngs([]);\n\t        this._motion((new Date).getTime());\n\t\t\tthis.fire(L.Motion.Event.Started, {layer: this}, false);\n\t\t}\n\n\t\treturn this;\n    },\n\n\t/**\n        Stops animation of current object\n        @param {LatLng[]} points full object points collection or empty collection for cleanup\n    */\n    motionStop: function (animEnded) {\n\t\tthis.motionPause();\n\t\tthis.setLatLngs(this._linePoints);\n\t\tthis.__ellapsedTime = null;\n\t\tthis._removeMarker(animEnded);\n\t\tthis.fire(L.Motion.Event.Ended, {layer: this}, false);\n\n\t\treturn this;\n    },\n\n\t/**\n        Pauses animation of current object\n    */\n\tmotionPause: function () {\n\t\tif (this.animation) {\n\t\t\tL.Util.cancelAnimFrame(this.animation);\n\t\t\tthis.animation = null;\n\t\t\tthis.fire(L.Motion.Event.Paused, {layer: this}, false);\n\t\t}\n\n\t\treturn this;\n\t},\n\n\t/**\n        Resume animation of current object\n    */\n\tmotionResume: function () {\n\t\tif (!this.animation && this.__ellapsedTime) {\n\t\t\tif (!this.motionOptions.duration) {\n\t\t\t\tif (this.motionOptions.speed) {\n\t\t\t\t\tthis.motionOptions.duration = L.Motion.Utils.getDuration(this._map, this._linePoints, this.motionOptions.speed);\n\t\t\t\t} else {\n\t\t\t\t\tthis.motionOptions.duration = 0;\n\t\t\t\t}\n\t\t\t}\n\t\t\tthis._motion((new Date).getTime() - (this.__ellapsedTime));\n\t\t\tthis.fire(L.Motion.Event.Resumed, {layer: this}, false);\n\t\t}\n\n\t\treturn this;\n\t},\n\n\t/**\n        Toggles animation of current object; Start/Pause/Resume;\n    */\n\tmotionToggle: function () {\n\t\tif (this.animation) {\n\t\t\tif (this.__ellapsedTime) {\n\t\t\t\tthis.motionPause();\n\t\t\t}\n\t\t} else {\n\t\t\tif (this.__ellapsedTime) {\n\t\t\t\tthis.motionResume();\n\t\t\t} else {\n\t\t\t\tthis.motionStart();\n\t\t\t}\n\t\t}\n\n\t\treturn this;\n\t},\n\n\t/**\n\t\tSetup motion duration at any time\n\t*/\n\tmotionDuration: function (duration) {\n\t\tvar prevDuration = this.motionSpeed.duration;\n\t\tthis.motionOptions.duration = duration || 0;\n\n\t\tif (this.animation && prevDuration) {\n\t\t\tthis.motionPause();\n\t\t    this.__ellapsedTime = this.__ellapsedTime * (prevDuration / duration);\n\t\t    this.motionOptions.duration = duration;\n\t\t\tthis.motionResume();\n\t\t}\n\t\treturn this;\n\t},\n\n\t/**\n\t\tSetup motion speed at any time\n\t*/\n\tmotionSpeed: function (speed) {\n\t\tvar prevSpeed = this.motionOptions.speed;\n\t\tthis.motionOptions.speed = speed || 0;\n\n\t\tif (this.animation && prevSpeed) {\n\t\t\tthis.motionPause();\n\t\t    this.__ellapsedTime = this.__ellapsedTime * (prevSpeed / speed);\n\t\t    this.motionOptions.duration = L.Motion.Utils.getDuration(this._map, this._linePoints, this.motionOptions.speed);\n\t\t\tthis.motionResume();\n\t\t}\n\n\t\treturn this;\n\t},\n\n\t/**\n\t\tReturns current constructed marker\n\t*/\n\tgetMarker: function () {\n\t\treturn this.__marker;\n\t},\n\n\t/**\n\t\tReturns markers array from all inner layers without flattering.\n\t*/\n\tgetMarkers: function () {\n\t\treturn [this.getMarker()];\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/leaflet.motion.js?");

/***/ }),

/***/ "./src/leaflet.motion.utils.js":
/*!*************************************!*\
  !*** ./src/leaflet.motion.utils.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Igor Vladyka <igor.vladyka@gmail.com> (https://github.com/Igor-Vladyka/leaflet.motion)\n**/\n\nL.Motion.Utils = {\n\t/**\n\t\tAttaches distances precalculated to current set of LatLng\n\t\t@param {L.Map} map Leaflet map to be calculate distances\n\t\t@param {Array<L.LatLng>|L.PolyLine} latlngs Set of geographical points\n\t\t@returns {Array<L.LatLng>|L.PolyLine} latlngs Set of geographical points with attached distances\n\t*/\n\tattachDistances: function(map, latLngs) {\n\t\tif (latLngs.length > 1) {\n\t\t\tfor (var i = 1; i < latLngs.length; i++) {\n\t\t\t\tlatLngs[i - 1].distanceToNextPoint = map.distance(latLngs[i - 1], latLngs[i]);\n\t\t\t}\n\t\t}\n\n\t\treturn latLngs;\n\t},\n\n\t/**\n\t\tReturns the coordinate of the point located on a line at the specified ratio of the line length.\n\t\t@param {L.Map} map Leaflet map to be used for this method\n\t\t@param {Array<L.LatLng>|L.PolyLine} latlngs Set of geographical points\n\t\t@param {Number} ratio the length ratio, expressed as a decimal between 0 and 1, inclusive\n\t\t@returns {Object} an object with latLng ({LatLng}) and predecessor ({Number}), the index of the preceding vertex in the Polyline\n\t\t(-1 if the interpolated point is the first vertex)\n\t*/\n\tinterpolateOnLine: function (map, latLngs, ratio) {\n\t\tlatLngs = (latLngs instanceof L.Polyline) ? latLngs.getLatLngs() : latLngs;\n\t\tif (latLngs.length < 2) {\n\t\t\treturn null;\n\t\t}\n\n\t\tvar allDistancesCalculated = true;\n\t\tfor (var d = 0; d < latLngs.length - 1; d++) {\n\t\t\tif (!latLngs[d].distanceToNextPoint) {\n\t\t\t\tallDistancesCalculated = false;\n\t\t\t\tbreak;\n\t\t\t}\n\t\t}\n\n\t\tif (!allDistancesCalculated) {\n\t\t\tthis.attachDistances(map, latLngs);\n\t\t}\n\n\t\t// ensure the ratio is between 0 and 1;\n\t\tratio = Math.max(Math.min(ratio, 1), 0);\n\n\t\tif (ratio === 0) {\n\t\t\treturn {\n\t\t\t\tlatLng: latLngs[0] instanceof L.LatLng ? latLngs[0] : L.latLng(latLngs[0]),\n\t\t\t\tpredecessor: -1\n\t\t\t};\n\t\t}\n\n\t\tif (ratio == 1) {\n\t\t\treturn {\n\t\t\t\tlatLng: latLngs[latLngs.length -1] instanceof L.LatLng ? latLngs[latLngs.length -1] : L.latLng(latLngs[latLngs.length -1]),\n\t\t\t\tpredecessor: latLngs.length - 2\n\t\t\t};\n\t\t}\n\n\t\t// get full line length between points\n\t\tvar fullLength = 0;\n\t\tfor (var dIndex = 0; dIndex < latLngs.length - 1; dIndex++) {\n\t\t\tfullLength += latLngs[dIndex].distanceToNextPoint;\n\t\t}\n\n\t\t// Calculate expected ratio\n\t\tvar ratioDist = fullLength * ratio;\n\n\t\t// follow the line segments [ab], adding lengths,\n\t\t// until we find the segment where the points should lie on\n\t\tvar cumulativeDistanceToA = 0, cumulativeDistanceToB = 0;\n\t\tfor (var i = 0; cumulativeDistanceToB < ratioDist; i++) {\n\t\t\tvar pointA = latLngs[i], pointB = latLngs[i+1];\n\n\t\t\tcumulativeDistanceToA = cumulativeDistanceToB;\n\t\t\tcumulativeDistanceToB += pointA.distanceToNextPoint;\n\t\t}\n\n\t\tif (pointA == undefined && pointB == undefined) { // Happens when line has no length\n\t\t\tvar pointA = latLngs[0], pointB = latLngs[1], i = 1;\n\t\t}\n\n\t\t// compute the ratio relative to the segment [ab]\n\t\tvar segmentRatio = ((cumulativeDistanceToB - cumulativeDistanceToA) !== 0) ? ((ratioDist - cumulativeDistanceToA) / (cumulativeDistanceToB - cumulativeDistanceToA)) : 0;\n\t\treturn {\n\t\t\tlatLng: this.interpolateOnLatLngSegment(pointA, pointB, segmentRatio),\n\t\t\tpredecessor: i-1\n\t\t};\n\t},\n\n    /**\n        Returns the Point located on a segment at the specified ratio of the segment length.\n        @param {L.Point} pA coordinates of point A\n        @param {L.Point} pB coordinates of point B\n        @param {Number} the length ratio, expressed as a decimal between 0 and 1, inclusive.\n        @returns {L.Point} the interpolated point.\n    */\n    interpolateOnPointSegment: function (pA, pB, ratio) {\n        return L.point(\n            (pA.x * (1 - ratio)) + (ratio * pB.x),\n            (pA.y * (1 - ratio)) + (ratio * pB.y)\n        );\n    },\n\n    /**\n        Returns the LatLng located on a segment at the specified ratio of the segment length.\n        @param {L.LatLng} pA coordinates of LatLng A\n        @param {L.LatLng} pB coordinates of LatLng B\n        @param {Number} the length ratio, expressed as a decimal between 0 and 1, inclusive.\n        @returns {L.LatLng} the interpolated LatLng.\n    */\n    interpolateOnLatLngSegment: function (pA, pB, ratio) {\n        return L.latLng(\n            (pA.lat * (1 - ratio)) + (ratio * pB.lat),\n            (pA.lng * (1 - ratio)) + (ratio * pB.lng)\n        );\n    },\n\n\t/**\n\t\t@param {L.Map} map Leaflet map to be calculate distances\n        @param {LatLng[]} linePoints of coordinates\n        @return {Number} distance in meter\n    */\n\tdistance: function(map, linePoints){\n\t\tvar distanceInMeter = 0;\n        for (var i = 1; i < linePoints.length; i++) {\n            distanceInMeter +=  map.distance(linePoints[i], linePoints[i - 1]);\n        }\n\n        return distanceInMeter;\n\t},\n\n\t/**\n\t\t@param {L.Map} map Leaflet map to be calculate distances\n        @param {LatLng[]} collection of coordinates\n        @param {Number} speed in KM/H\n        @return {Number} duration in ms\n    */\n\tgetDuration: function (map, collection, speed) {\n\t\tvar distance = L.Motion.Utils.distance(map, collection.map(function(m){ return L.Motion.Utils.toLatLng(m); })); // in meters;\n\t\treturn distance/(speed/3600); // m / (km/h * 1000 => m/h / (60 * 60)) => m / k/s (m/s * 1000) => 1000 * m / m/s => ms;\n\t},\n\n\ttoLatLng: function(a, b, c) {\n\t\tif (a instanceof L.LatLng) {\n\t\t\treturn a;\n\t\t}\n\t\tif (L.Util.isArray(a) && typeof a[0] !== 'object') {\n\t\t\tif (a.length === 3) {\n\t\t\t\treturn L.latLng(a[0], a[1], a[2]);\n\t\t\t}\n\t\t\tif (a.length === 2) {\n\t\t\t\treturn L.latLng(a[0], a[1]);\n\t\t\t}\n\t\t\treturn null;\n\t\t}\n\t\tif (a === undefined || a === null) {\n\t\t\treturn a;\n\t\t}\n\t\tif (typeof a === 'object' && 'lat' in a) {\n\t\t\treturn L.latLng(a.lat, 'lng' in a ? a.lng : a.lon, a.alt);\n\t\t}\n\t\tif (b === undefined) {\n\t\t\treturn null;\n\t\t}\n\t\treturn L.latLng(a, b, c);\n\t},\n\n\tgetAngle: function(prevPoint, nextPoint) {\n\t\tvar angle = Math.atan2(nextPoint.lat - prevPoint.lat, nextPoint.lng - prevPoint.lng) * 180 / Math.PI;\n\t\tif (angle < 0) {\n\t\t\tangle += 360;\n\t\t}\n\n\t\treturn angle;\n\t},\n\n\t// Leaflet -> geometries -> LineUtil\n\tisFlat: function (latlngs) {\n\t\treturn !L.Util.isArray(latlngs[0]) || (typeof latlngs[0][0] !== 'object' && typeof latlngs[0][0] !== 'undefined');\n\t}\n};\n\n\n//# sourceURL=webpack:///./src/leaflet.motion.utils.js?");

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