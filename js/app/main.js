define([
	'jquery',
	'backbone',
	'view/main_view',
	'model/main_model'
], function($, Backbone, MainView, MainModel){

	var HomeShow = function(){
		var mainView = new MainView(),
			mainModel = new MainModel();

		mainModel.fetch({
			url: "js/api/main_list.json",
			success: function(res){
				console.log(res.attributes);

				console.log(mainModel.get("id"));

				var template = mainView.render(res.attributes).el;
				$('#app_view').html(template);
			},
			error: function(){
				console.log("error");
			}
		});
		

		// Backbone.sync = function(method, model) {
		// 	console.log(method + ": " + JSON.stringify(model));
		// 	model.id = 1;
		// };

		var book = new Backbone.Model({
			title: "The Rough Riders",
			author: "Theodore Roosevelt"
		});

		book.sync = function(method, model){
			console.log(method + ": " + JSON.stringify(model));
		};


		book.fetch();
		book.save();

		book.save({author: "Teddy"});
	};

	return HomeShow;
});
