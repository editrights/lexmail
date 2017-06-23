/**
 * Created by zkirilov on 23.6.2017 г..
 */

module.exports = {
	navigateFallback: '/index.html',
	stripPrefix: 'dist',
	root: 'dist/',
	staticFileGlobs: [
		'dist/index.html',
		'dist/**.js',
		'dist/**.css'
	]
};
