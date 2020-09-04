$(function () {
	let MyView = Backbone.View.extend({
		el: '#msg',

		render() {
			this.$('#title').text('※使用作業系統平台');
			this.$('#item1').text('Windows');
			this.$('#item2').text('macOS');
			this.$('#item3').text('Linux');
			return this;
		},
	});

	let myView = new MyView();
	myView.render();
});