Vue.directive('my-directive', {
	bind(el) {
		el.innerHTML = '<p>**bind now**</p>';
	},
	update(el, binding) {
		if (binding.oldValue != binding.value) {
			el.innerHTML = '<p>' + binding.oldValue + ' -> ' + binding.value + '</p>';
		}
		console.log(binding.value);
	},
	unbind(el) {
		el.innerHTML = '<p>**unbind**</p>';
	}
})

new Vue({
	el: '#msg',
	data: {
		val: '',
		message: 'this is message!'
	},
	methods: {
		myfunc() {
			this.message = this.val;
		}
	}
})