define([
	'jquery',
	'backbone'
], function($, Backbone, homeTemp){

	var MainModel = Backbone.Model.extend({
		default:{
			"link": "",
			"name": ""
		},
		parse: function(res){
			console.log(res);
			res.detail = res.data;
			return res;
		}
	});

	return MainModel;
});
