$(() => {
	const MyTagView = Backbone.View.extend({
		tagName: 'p',
		className: 'msg',
		id() {
			return _.uniqueId('item');
		},
		attributes: {
			style: 'color: white; background: red; padding: 5px 10px;',
		},
	});

	const myTag = new MyTagView();
	myTag.el.textContent = '這是新增的標籤。';
	$('#msg').html(myTag.el);
});
