$(function () {
	let MyTagView = Backbone.View.extend({
		tagName: 'p',
		className: 'msg',
		id() {
			return _.uniqueId('item');
		},
		attributes: {
			'style': 'color: white; background: red; padding: 5px 10px;'
		}
	});

	let myTag = new MyTagView();
	myTag.el.textContent = '這是新增的標籤。';
	console.log(myTag);
	$('#msg').html(myTag.el);
});