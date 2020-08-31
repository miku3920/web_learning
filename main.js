new Vue({
	el: '#msg',
	data: {
		msgArray: [],
		message: '',
		text1: ''
	},
	created() {
		this.msgArray.push('sample message.');
		this.message = this.msgArray;
	},
	methods: {
		doAction() {
			this.msgArray.push(this.text1);
			this.message = this.msgArray;
		}
	}
})