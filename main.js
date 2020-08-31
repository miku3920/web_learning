new Vue({
	el: '#msg',
	data: {
		number: '0'
	},
	computed: {
		result() {
			// var total = 0;
			// for (var i = 0; i <= this.number; i++){
			// 	total += i;
			// }
			// return total;
			return (+this.number + 1) * +this.number / 2;
		}
	}
})