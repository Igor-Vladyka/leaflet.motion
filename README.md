# Animation Plugin for Leaflet.js
[![npm version](https://badge.fury.io/js/leaflet.motion.svg)](https://www.npmjs.com/package/leaflet.motion)

## General information

A [leaflet](http://www.leafletjs.com) plugin which allows users to [apply animation](https://igor-vladyka.github.io/leaflet.motion/).

### Downloads
**NPM**
````
npm install --save leaflet.motion
````

**YARN**
````
yarn add leaflet.motion
````

### Usage
**Include script**:
```html
<script src="dist/leaflet.motion.min.js"></script>
```

**Main options**:
```js
L.motion.polyline([], options, motionOptions, markerOptions).addTo(map); //  as L.polyline
L.motion.polygon([], options, motionOptions, markerOptions).addTo(map); //  as L.polygon
L.motion.group([], options).addTo(map); //  as L.featureGroup - to run all animation at same time
L.motion.seq([], options).addTo(map); //  as L.featureGroup - to setup seq for animations.
```

### Options:

You can pass a number of options to the plugin to control various settings.

**Default control options**

| Option        | Type         | Default      | Description   |
| ------------- |--------------|--------------|---------------|
| pane    		| [Pane](https://leafletjs.com/reference-1.3.4.html#map-pane) | 'polymotionPane' 	  | Default pane |

**Motion options**

| Option        | Type         | Default      | Description   |
| ------------- |--------------|--------------|---------------|
| auto     		| Boolean      | false  	  | Indicates auto start animation when motion object added to the map |
| easing    	| [L.Motion.Ease](https://github.com/Igor-Vladyka/leaflet.motion/blob/master/src/leaflet.motion.easing.js)| L.Motion.Ease.linear | Animation strategy |
| speed    		| Number | 0 | Motion speed in KM/H |
| duration    	| Number | 0 | Motion duration in ms, 0 means no animation, instant rendering on motionStart()|

**Marker options**

All [MarkerOptions](https://leafletjs.com/reference-1.3.4.html#marker-option) that you can add to any marker + one more:

| Option        | Type         | Default      | Description   |
| ------------- |--------------|--------------|---------------|
| removeOnEnd	| Boolean | false  | Removes marker from map on motion end |


Here's an example of passing through some options:
``` js
L.motion.polyline([[50,0], [60,10]], {
	color: "transparent"
}, {
	auto: true,
	duration: 3000,
	easing: L.Motion.Ease.easeInOutQuart
}, {
	removeOnEnd: true,
	icon: L.divIcon({html: "<i class='fa fa-car fa-2x' aria-hidden='true'></i>", iconSize: L.point(27.5, 24)})
}).addTo(map);
```

### Public methods

#### L.motion.*
Public methods in all motion objects:
``` js
motionStart() // to start motion.
motionStop() // to stop motion.
motionPause() // to pause motion.
motionResume() // to resume paused motion.
motionToggle() // to pause motion, if it's running. To start motion if it's not. Also will resume motion if it was paused.
getMarkers() // to get all markes from all motion sub components. Will return multi-dimensional array of markers.
```

#### L.motion.polyline and L.motion.polygon
Additional methods in polyline and polygon
``` js
motionDuration(duration) // - expected duration for motion in milliseconds, can be used after motion is created.
motionSpeed(speed) // - expected motion speed in KM/H, can be used after motion is created.
addLatLng(latLng) // - allows to add additional point in the end for the motion animation.
getMarker() // returns marker (if markerOptions is passed on creation) to attach needed behavior. Marker will be added to the map only during animation
```

### Motion Events
| Event           | Value     | Description |
| - | - | - |
| L.Motion.Event.Started   | { layer } | Fires on motion stated on root element only |
| L.Motion.Event.Paused | { layer } | Fires on motion paused on root element only |
| L.Motion.Event.Resumed | { layer } | Fires on motion resumed on root element only |
| L.Motion.Event.Ended | { layer } | Fires on motion ended on root element only |
| L.Motion.Event.Section | { layer } | Fires on each motion section change in L.Motion.Seq starting with first one |
