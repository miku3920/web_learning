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
var Student = /** @class */ (function () {
    function Student(n, y, g) {
        this.name = n;
        this.age = y;
        this.grade = g;
    }
    Student.prototype.print = function () {
        var msg = '<p>我是 ' + this.name + '，今年 ' + this.age + ' 歲，現在 ' + this.grade + ' 年級。</p>';
        return msg;
    };
    return Student;
}());
var data = [];
data.push(new Person('taro', 37));
data.push(new Student('hanako', 17, 3));
data.push(new Person('sachiko', 45));
function doClick() {
    var msg = document.querySelector('#msg');
    var val = document.querySelector('#text1').value;
    var obj = data[val];
    msg.innerHTML = obj.print();
}
