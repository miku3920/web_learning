interface Man {
	name: string
	age: number

	print(): string
}
class Person implements Man {
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

class Student implements Man{
	public name: string
	public age: number
	public grade: number
	
	constructor(n: string, y: number, g: number) {
		this.name = n
		this.age = y
		this.grade=g
	}

	print(): string{
		let msg: string = '<p>我是 ' + this.name + '，今年 ' + this.age +' 歲，現在 '+this.grade+' 年級。</p>'
		return msg
	}
}

var data: Man[] = []
data.push(new Person('taro',37))
data.push(new Student('hanako',17,3))
data.push(new Person('sachiko',45))

function doClick(): void {
	let msg: Element = document.querySelector('#msg')
	let val: string = (<HTMLInputElement>document.querySelector('#text1')).value

	let obj: Man = data[val]
	msg.innerHTML = obj.print()
}
