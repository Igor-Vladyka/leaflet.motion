var path = require('path');
var webpack = require('webpack');
var PACKAGE = require('./package.json');
var banner = '\n ' + PACKAGE.name + ' - v' + PACKAGE.version + ' (' + PACKAGE.homepage +') ' +
             '\n ' + PACKAGE.description + '\n ' +
             '\n ' + PACKAGE.license +
             '\n (c) ' + new Date().getFullYear() + '  ' + PACKAGE.author + '\n';

var pluginFiles = [
	'./src/leaflet.motion.js',
	'./src/leaflet.motion.utils.js',
	'./src/leaflet.motion.easing.js',
	'./src/layer/leaflet.motion.polyline.js',
	//'./src/layer/leaflet.motion.polygon.js',
	'./src/layer/leaflet.motion.group.js',
	'./src/layer/leaflet.motion.seq.js'
];

module.exports = [
	{
		mode: "development",
		entry: {
		    "leaflet.motion": pluginFiles,
		},
		output: { filename: '[name].js', path: path.resolve(__dirname, 'dist') },
	    plugins: [
	        new webpack.BannerPlugin(banner)
	    ]
	},
	{
		mode: "production",
		entry: {
		    "leaflet.motion.min": pluginFiles,
		},
		output: { filename: '[name].js', path: path.resolve(__dirname, 'dist') },
	    plugins: [
	        new webpack.BannerPlugin(banner)
	    ]
	}
];
