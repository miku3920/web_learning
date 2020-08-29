class Person {
	public name: string
	public age: number

	constructor(n: string, y: number) {
		this.name = n
		this.age = y
	}

	print(): string {
		let msg: string = '<p>My name is ' + this.name + '. I am ' + this.age + ' year old.</p>'
		return msg
	}
}

class Student extends Person {
	public grade: number

	constructor(n: string, y: number, g: number) {
		super(n, y)
		this.grade = g
	}

	printAll(): string {
		let msg: string = '<p>我是 ' + this.name + '，今年 ' + this.age + ' 歲，現在 ' + this.grade + ' 年級。</p>'
		return msg
	}
}

function doClick(): void {
	let msg: Element = document.querySelector('#msg')
	let val: string = (<HTMLInputElement>document.querySelector('#text1')).value

	let arr: string[] = val.split(',')

	if (arr.length == 2) {
		let obj: Person = new Person(arr[0], parseInt(arr[1]))
		msg.innerHTML = obj.print()
	}else if (arr.length == 3) {
		let obj: Student = new Student(arr[0], parseInt(arr[1]), parseInt(arr[2]))
		msg.innerHTML = obj.printAll()
	}
}
