new Vue({
	el: '#msg',
	data: {
		isA: true,
		isB: false
	},
	methods: {
		change() {
			this.isA = !this.isA;
			this.isB = !this.isB;
		}
	}
})