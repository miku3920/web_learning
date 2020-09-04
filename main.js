$(function(){
	let MyView = Backbone.View.extend({
		render() {
			this.$el.text('Hello Backbone.js!');
			return this;
		},
	});

	let myView = new MyView();

	$('#msg').append(myView.render().$el);
	
});