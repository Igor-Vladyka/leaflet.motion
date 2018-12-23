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
**Step 1.** Include the required js and css files in your document.

```html
	<script src="dist/leaflet.motion.min.js"></script>
```

**Step 2.** Use it the same way:

``` js
	L.motion.polyline([], options, motionOptions, markerOptions).addTo(map); //  as L.polyline
	L.motion.polygon([], options, motionOptions, markerOptions).addTo(map); //  as L.polygon
	L.motion.group([], options).addTo(map); //  as L.featureGroup - to run all animation at same time
	L.motion.seq([], options).addTo(map); //  as L.featureGroup - to setup seq for animations.
```

**Step 3.**
You can pass a number of options to the plugin to control various settings.

***Default control options***

| Option        | Type         | Default      | Description   |
| ------------- |--------------|--------------|---------------|
| pane    		| [Pane](https://leafletjs.com/reference-1.3.4.html#map-pane) | 'polymotionPane' 	  | Default pane |

***Motion options***

| Option        | Type         | Default      | Description   |
| ------------- |--------------|--------------|---------------|
| auto     		| Boolean      | false  	  | Indicates auto start animation on plugin added to the map |
| easing    	| [L.Motion.Ease](https://github.com/Igor-Vladyka/leaflet.motion/blob/master/src/leaflet.motion.easing.js)| L.Motion.Ease.linear | Animation strategy |
| speed    		| Number | 50 	  | Motion speed in KM/H |
| duration    	| Number | 0  | Motion duration in ms, 0 means no animation |

***Marker options***

All [MarkerOptions](https://leafletjs.com/reference-1.3.4.html#marker-option) that you can add to any marker + one more:

| Option        | Type         | Default      | Description   |
| ------------- |--------------|--------------|---------------|
| removeOnEnd	| Boolean | false  | Removes marker from map on motion end |


Here's an example of passing through some options:
``` js
L.motion.polyline([[50,0], [60,10]], {
	color: "transparent"
}, {
	auto: true
}, {
	removeOnEnd: true
}).addTo(map);
```
