var _this = this;
var o = {
    a: function () {
        console.log(_this); // window
        // all this are window
        var oo = {
            that: _this,
            a: function () {
                console.log(_this);
                var f = function () {
                    console.log(this);
                };
                f();
            },
            f: function () {
                console.log(this); // oo
            }
        };
        console.log(oo.that);
        oo.a();
        oo.f();
    },
    f: function () {
        var _this = this;
        console.log(this); // o
        var a = function () {
            console.log(_this); // o
            // all arrow this are o
        };
        var f = function () {
            console.log(this); // window
            // all this are window
        };
        var fo = {
            a: function () {
                console.log(_this); // o
                var a = function () {
                    console.log(_this); // o
                    // all arrow this are o
                };
                var f = function () {
                    console.log(this); // window
                    // all this are window
                };
                a();
                f();
            },
            f: function () {
                var _this = this;
                console.log(this); // fo
                var a = function () {
                    console.log(_this); // fo
                    // all arrow this are fo
                };
                var f = function () {
                    console.log(this); // window
                    // all this are window
                };
                a();
                f();
            },
            fo4: true
        };
        a();
        f();
        fo.a();
        fo.f();
    }
};
o.a();
// f 中的 this 會指向 f 所在的物件
// af 中的 this 會指向 af 所在物件的外層物件
// f 中的 f 中的 this 會指向 window
// f 中的 af 中的 this 會指向 f 所在的物件
// f 中的 af 中的 af 中的 this 會指向 f 所在的物件
// f 中的 af 中的 f 中的 this 會指向 window
// 也就是說
// 在 o 建立 f，f 內的 this 會變成 o
// 在 f 建立 f，f 內的 this 會變成 window
// 在 o 建立 af，af 內的 this 與 o 的 this 相同
// 在 o 建立 oo，oo 內的 this 與 o 的 this 相同
// Outer Environment 的概念
// 如果要呼叫一個在該 exection context 中沒有的變項時，它會往它的 outer environment 去找
// 所以
// 要知道 this 是什麼就往外層找 f
// this 就是 f 所在的物件 
// f 在 f or af 裡
// this 就是 window
// 結論
// f 有 this 變項
// o, af 沒有
