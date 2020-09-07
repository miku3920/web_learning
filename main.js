$(() => {
	// 顯示訊息用的 View
	const MyView = Backbone.View.extend({
		el: '#msg',
	});

	const myView = new MyView();

	// 輸入欄位的 View
	const InputView = Backbone.View.extend({
		events: {
			keypress: 'onkeydown',
		},
		onkeydown(event) {
			this.value = this.$el.val();
		},
		el: '#input1',
	});

	const inputView = new InputView();

	// 按鈕的 View
	const ButtonView = Backbone.View.extend({
		events: {
			click: 'onclick',
		},
		initialize(obj) {
			this.input = obj.input;
			this.msg = obj.msg;
			this.$el.val('click');
		},
		onclick(event) {
			const str = this.input.$el.val();
			this.msg.$el.text(`typed: ${str}`);
		},
		el: '#btn1',
		input: null,
		msg: null,
	});

	const buttonView = new ButtonView({
		input: inputView,
		msg: myView,
	});
});
