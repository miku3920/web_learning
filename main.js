Vue.component('my-component', {
	props: ['message'],
	template: '<p style="border: 1px solid #ccc;">{{message}}</p>'
})

new Vue({
	el: '#msg',
	data: {
		data: []
	}
})