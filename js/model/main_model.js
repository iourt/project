define([
	'jquery',
	'backbone'
], function($, Backbone, homeTemp){

	var MainModel = Backbone.Model.extend({
		default:{
			"link": "",
			"name": ""
		}
	});

	return MainModel;
});
