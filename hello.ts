enum gender { male, female }
type myname = string
type mail = string
type age = number

let person: [myname, mail, gender, age];
person = ['taro', 'taro@yamada', gender.male, 23]

document.write('<h1>Tuple</h1>')
document.write('<p>' + person + '</p>')