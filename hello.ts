class Person {
	private _name: string
	private _age: number

	get age(): number {
		return this._age
	}

	set age(y: number) {
		this._age = y < 0 ? 0 : y
	}

	get name(): string {
		return this._name
	}

	set name(y: string) {
		this._name = y || this._name
	}

	constructor(n: string, y: number) {
		this._name = n
		this._age = y
	}

	print(): string {
		let msg: string = '<p>My name is ' + this._name + '. I am ' + this.age + ' year old.</p>'
		return msg
	}
}

function doClick(): void {
	let val: string = (<HTMLInputElement>document.querySelector('#text1')).value
	let arr: string[] = val.split(',')

	let obj: Person = new Person(arr[0], parseInt(arr[1]))
	let msg: Element = document.querySelector('#msg')
	obj.age = -1
	obj.name = ""
	msg.innerHTML = obj.print()
}
