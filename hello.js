var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
var person;
person = ['taro', 'taro@yamada', gender.male, 23];
document.write('<h1>Tuple</h1>');
document.write('<p>' + person + '</p>');
