define([
	'layout/main.hbs'
], function(mainTemp){

	var MainView = Backbone.View.extend({
		template: mainTemp,
        initialize: function(){

        },
        render: function(renderData) {
            this.setElement( this.template(renderData) );
            return this;
        }
	});

	return MainView;
});