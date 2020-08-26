var price: number = 12300;
var tax: number = 0.05;

var res: number = price * (1.0 + tax);
var msg: string = price + ' 元的含稅金額為 ' + res + ' 元。';

document.write('<h1>Sample</h1>');
document.write(msg);