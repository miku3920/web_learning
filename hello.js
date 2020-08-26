var MyClass = /** @class */ (function () {
    function MyClass(title, message) {
        this.title = title;
        this.message = message;
    }
    MyClass.prototype.print = function () {
        return "<h1>" + this.title + "你好" + "<p>" + this.message + "</p>";
    };
    return MyClass;
}());
;
var msg = new MyClass("Hello", "this TypeScript sample!");
document.write(msg.print());
