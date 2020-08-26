function convert<T>(item: T): string {
	switch (typeof item) {
		case 'number':
			return Math.floor(item).toString()
		case 'string':
			return item.toUpperCase()
		case 'boolean':
			return item ? 'yes' : 'no'
		default:
			return 'any';
	}
}

function doClick(): void {
	let val: string = 'hello'
	let msg: Element = document.querySelector('#msg')
	msg.innerHTML = convert(val)
}