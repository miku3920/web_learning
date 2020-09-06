$(() => {
	const MyView = Backbone.View.extend({
		el: '#msg',
		tmp1: _.template($('#myview-template').html()),
		render() {
			this.$el.html(this.tmp1({
				title: '山田太郎',
				content: '任職ＯＯ銀行<br>e-mail: taro@yamada',
			}));
			return this;
		},
	});

	const myView = new MyView();
	myView.render();
});
