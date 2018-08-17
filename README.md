## leaflet.js line animation plugin

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

**Step 2.** Use it the same way as L.polyline

``` js
	L.motion.polyline([]).addTo(map);
```

**Step 3.**
You can pass a number of options to the plugin to control various settings.

| Option        | Type         | Default      | Description   |
| ------------- |--------------|--------------|---------------|
| auto     		| Boolean      | false  	  | Indicates auto start animation on plugin added to the map |
| easing    	| L.Motion.Ease| L.Motion.Ease.linear | Animation strategy |
| speed    		| Motion speed | 50 	  | Motion speed in KM/S |

Here's an example of passing through some options:
``` js
L.motion.polyline([[50,0], [60,10]], {
	color: "orange",
	auto: true
}).addTo(map);
```
