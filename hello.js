var gender;
(function (gender) {
    gender[gender["male"] = 0] = "male";
    gender[gender["female"] = 1] = "female";
})(gender || (gender = {}));
var data = [];
data.push(['taro', 'taro@yamada', gender.male, 23]);
data.push(['hanako', 'hanako@flower', gender.female, 45]);
data.push(['sachiko', 'sachiko@happy', gender.female, 67]);
document.write('<h1>Tuple</h1>');
document.write('<p>' + data[0] + '</p>');
document.write('<p>' + data[1] + '</p>');
document.write('<p>' + data[2] + '</p>');
