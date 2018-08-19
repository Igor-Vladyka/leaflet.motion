## leaflet.js layers animation plugin

A [leaflet](http://www.leafletjs.com) plugin which allows users to apply animation [DEMO](https://igor-vladyka.github.io/leaflet.motion/)

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
	L.motion.polyline([]).addTo(map); //  as L.polyline
	L.motion.polygon([]).addTo(map); //  as L.polygon
	L.motion.group([]).addTo(map); //  as L.featureGroup - to run all animation at same time
	L.motion.seq([]).addTo(map); //  as L.featureGroup - to setup seq for animations.
```

**Step 3.**
You can pass a number of options to the plugin to control various settings.

| Option        | Type         | Default      | Description   |
| ------------- |--------------|--------------|---------------|
| pane    		| [Pane](https://leafletjs.com/reference-1.3.0.html#map-pane) | 'polymotionPane' 	  | Default pane |
| auto     		| Boolean      | false  	  | Indicates auto start animation on plugin added to the map |
| easing    	| [L.Motion.Ease](https://github.com/Igor-Vladyka/leaflet.motion/blob/master/src/leaflet.motion.easing.js)| L.Motion.Ease.linear | Animation strategy |
| speed    		| Number | 50 	  | Motion speed in KM/H |
| duration    	| Number | 0  | Motion duration in ms, 0 means no animation |
| removeMarkerOnEnd	| Boolean | false  | Removes marker from map on motion end |
| motionMarkerOnLine| Number | 0  | Angle in degree to align marker north |
| markerOptions	| [MarkerOptions](https://leafletjs.com/reference-1.3.0.html#marker-option) | null  | When present, marker will be created with specified options |

Here's an example of passing through some options:
``` js
L.motion.polyline([[50,0], [60,10]], {
	color: "transparent",
	auto: true,
	markerOptions: {}
}).addTo(map);
```
