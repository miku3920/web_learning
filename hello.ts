class MyClass {
	constructor(public title: string, public message: string) { }

	print() {
		return "<h1>" + this.title + "你好" + "<p>" + this.message + "</p>";
	}
};

var msg: MyClass = new MyClass("Hello", "this TypeScript sample!");

document.write(msg.print());