var Person = /** @class */ (function () {
    function Person(n, y) {
        this._name = n;
        this._age = y;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (y) {
            this._age = y < 0 ? 0 : y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (y) {
            this._name = y || this._name;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.print = function () {
        var msg = '<p>My name is ' + this._name + '. I am ' + this.age + ' year old.</p>';
        return msg;
    };
    return Person;
}());
function doClick() {
    var val = document.querySelector('#text1').value;
    var arr = val.split(',');
    var obj = new Person(arr[0], parseInt(arr[1]));
    var msg = document.querySelector('#msg');
    obj.age = -1;
    obj.name = "";
    msg.innerHTML = obj.print();
}
