$(function () {
	let MyView = Backbone.View.extend({
		initialize() {
			this.$title = $('#title');
			this.$item1 = $('#item1');
			this.$item2 = $('#item2');
			this.$item3 = $('#item3');
		},
		el: '#msg',
		render() {
			this.$title.text('※使用作業系統平台');
			this.$item1.text('Windows');
			this.$item2.text('macOS');
			this.$item3.text('Linux');
			return this;
		},
	});

	let myView = new MyView();
	myView.render();
});