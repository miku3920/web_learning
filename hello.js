var Person = /** @class */ (function () {
    function Person(n, y) {
        this.name = n;
        this.age = y;
    }
    Person.prototype.print = function () {
        var msg = '<p>My name is ' + this.name + '. I am ' + this.age + ' year old.</p>';
        return msg;
    };
    Person.tag = 'p';
    return Person;
}());
function doClick() {
    var msg = document.querySelector('#msg');
    var val = document.querySelector('#text1').value;
    var arr = val.split(',');
    var obj = new Person(arr[0], parseInt(arr[1]));
    Person.tag = 'h1';
    msg.innerHTML = obj.print();
}
