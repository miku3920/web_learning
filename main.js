new Vue({
	el: '#msg',
	data: {
		woTax: '0'
	},
	computed: {
		wTax: {
			get(){
				return parseInt(this.woTax * 1.05);
			},
			set(val) {
				this.woTax = Math.ceil(val / 1.05);
			}
		}
	}
})