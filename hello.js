var __extends = (this && this.__extends) || (function () {
	var extendStatics = function (d, b) {
		extendStatics = Object.setPrototypeOf ||
			({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
			function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
		return extendStatics(d, b);
	};
	return function (d, b) {
		extendStatics(d, b);
		function __() { this.constructor = d; }
		d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
})();
var Person = /** @class */ (function () {
	function Person(n, y) {
		this.name = n;
		this.age = y;
	}
	Person.prototype.print = function () {
		var msg = '<p>My name is ' + this.name + '. I am ' + this.age + ' year old.</p>';
		return msg;
	};
	return Person;
}());
var Student = /** @class */ (function (_super) {
	__extends(Student, _super);
	function Student(n, y, g) {
		var _this = _super.call(this, n, y) || this;
		_this.grade = g;
		return _this;
	}
	Student.prototype.printAll = function () {
		var msg = '<p>我是 ' + this.name + '，今年 ' + this.age + ' 歲，現在 ' + this.grade + ' 年級。</p>';
		return msg;
	};
	return Student;
}(Person));
function doClick() {
	var msg = document.querySelector('#msg');
	var val = document.querySelector('#text1').value;
	var arr = val.split(',');
	if (arr.length == 2) {
		var obj = new Person(arr[0], parseInt(arr[1]));
		msg.innerHTML = obj.print();
	}
	else if (arr.length == 3) {
		var obj = new Student(arr[0], parseInt(arr[1]), parseInt(arr[2]));
		msg.innerHTML = obj.printAll();
	}
}
