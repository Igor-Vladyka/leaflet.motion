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
| showMarker	| Boolean | false  | Add marker to the map on first line point when motion just added(start can be delayed) to the map |


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
	showMarker: true,
	icon: L.divIcon({html: "<i class='fa fa-car fa-2x' aria-hidden='true'></i>", iconSize: L.point(27.5, 24)})
}).addTo(map);
```

To rotate the marker you need to properly setup motion-base angle on 90* north, so that it can be rotated to the movement direction.
``` js
L.motion.polyline([{"lat":50,"lng":0},{"lat":51.15611417450841,"lng":-2.1906730905175213}], {
	color:"khaki"
}, null, {
	removeOnEnd: true,
	icon: L.divIcon({html: "<i class='fa fa-plane fa-2x' aria-hidden='true' motion-base='-48'></i>", iconSize: L.point(19, 24)})
}).motionDuration(7000)
```

### Public methods

#### L.motion.*
Public methods in all motion objects:
``` js
motionStart() // to start motion.
motionStop() // to stop motion.
motionPause() // to pause motion.
motionResume() // to resume paused motion.
motionToggle() // to pause motion, if it's running. To start motion if it's not. Or just resume.
getMarkers() // to get multi-dimensional array of markers from all motion sub components.
```

#### L.motion.polyline and L.motion.polygon
Additional methods in polyline and polygon
``` js
// - expected duration for motion in milliseconds, can be used after motion is created to start animation
// and can be used during animation to change object animation duration.
motionDuration(duration)

// - expected motion speed in KM/H, can be used after motion is created to start animation
// and can be used during animation to change object speed.
motionSpeed(speed)

addLatLng(latLng) // - allows to add additional point in the end for the motion animation.

 // Returns marker (if markerOptions is passed on creation) to attach needed behavior.
 // Marker will be added to the map only during animation
getMarker()
```

#### L.motion.seq
``` js
addLayer(layer, autostart) // to append layer to the end of sequence and autostart it if needed
```

Now we can add new layers to Seq object.
- If it's not started yet, new layers will be added and prepared to start.
- If it's running right now new layer will be added and wait it turn.
- If it's completed, and you want to run new layer right now, additional parameter should be passed.
``` js
var planePolyline = L.motion.polyline(planeRoute).motionDuration(2000);

// Build the Sequence Group:
var seqGroup = L.motion.seq([
	trackPolyline, shipPolyline
]).addTo(map);

seqGroup.addLayer(planePolyline, true);
```

### Motion Events
| Event           | Value     | Description |
| - | - | - |
| L.Motion.Event.Started   | { layer } | Fires on motion stated on root element only |
| L.Motion.Event.Paused | { layer } | Fires on motion paused on root element only |
| L.Motion.Event.Resumed | { layer } | Fires on motion resumed on root element only |
| L.Motion.Event.Ended | { layer } | Fires on motion ended on root element only |
| L.Motion.Event.Section | { layer } | Fires on each motion section change in L.Motion.Seq starting with first one |

#### Dependencies:
Please include next leaflet modules to make it work properly, or just whole Leaflet.js :)
``` js
L.Polygon
L.Polyline
L.FeatureGroup
L.Util
```
