(function() {

	'use strict';

	var app = angular.module('formlyApp', ['formly', 'formlyBootstrap']);
	app.config(function ($httpProvider) {
		//uncommenting the following line makes GET requests fail as well
		$httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
		//$httpProvider.defaults.headers.common = {};
		//$httpProvider.defaults.headers.post = {};
		//$httpProvider.defaults.headers.put = {};
		//$httpProvider.defaults.headers.patch = {};
	});

})();