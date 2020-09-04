$(function () {
	let ButtonView = Backbone.View.extend({
		events: {
			'click': 'onclick'
		},
		el: '#btn1',
		onclick() {
			alert('click me!');
		}
	});

	let buttonView = new ButtonView();
});