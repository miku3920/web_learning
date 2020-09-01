Vue.component('my-component', {
	props: ['items'],
	template: '#my-template'
})

new Vue({
	el: '#msg',
	data: {
		data: []
	}
})