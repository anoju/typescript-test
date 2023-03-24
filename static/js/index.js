var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function write(txt) {
    var _console = document.querySelector('.console');
    if (_console instanceof Element) {
        var _p = document.createElement('p');
        _p.innerHTML = String(txt);
        _console.appendChild(_p);
    }
}
function tsInit() {
    var myName1 = 'kim';
    var myName2 = ['kim', 'an'];
    var myName2ty2 = ['kim', 'an'];
    var num1 = [1, 2, 3];
    var num2 = [1, 2, 3];
    var myName3 = 'kim';
    myName3 = 5;
    var myName4 = 'kim';
    myName4 = 6;
    var ary1 = ['a', 1];
    function sayHello() {
        write('hello');
    }
    sayHello();
    function sayError() {
        throw new Error();
    }
    function infLoop() {
        while (true) {
            console.log('infLoop');
        }
    }
    var Os;
    (function (Os) {
        Os["Window"] = "window";
        Os["Ios"] = "ios";
        Os["Android"] = "android";
    })(Os || (Os = {}));
    var myOs;
    myOs = Os.Window;
    write('myOs:' + myOs);
    var noneTy1 = null;
    var noneTy2 = undefined;
    var myObj1 = { name: 'kim', age: 20 };
    var myObj2 = { name: 'kim' };
    var myObj3 = {
        name: 'kim',
        age: 20
    };
    write('myObj3:' + myObj3.name);
    var myObj4 = {
        name: 'kim',
        age: 20,
        birth: 20221225,
        1: 'A'
    };
    myObj4.gerder = 'male';
    var john = [4, true];
    var john2 = {
        name: 'john',
        age: 32
    };
}
tsInit();
function tsInit2() {
    function fnEvent1(x) {
        return x * 2;
    }
    var log = fnEvent1(123);
    write('fnEvent1:' + log);
    function showIt(arr) {
        arr.forEach(function (item) {
            write('showIt item:' + item);
        });
    }
    showIt([1, 2, 3]);
    function hello(name) {
        return "Hello, ".concat(name || 'world');
    }
    write('hello:' + hello());
    write('hello:' + hello('anoju'));
    function hello2(name) {
        if (name === void 0) { name = 'world'; }
        return "Hello, ".concat(name);
    }
    write('hello2:' + hello2());
    write('hello2:' + hello2('anoju'));
    function hello3(name, age) {
        var txt = "Hello, ".concat(name, ".");
        if (!!age)
            txt += " You are ".concat(age);
        return txt;
    }
    write('hello3:' + hello3('anoju'));
    write('hello3:' + hello3('anoju', 44));
    function sumNum() {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        return nums.reduce(function (a, b) { return a + b; }, 0);
    }
    write('sum:' + sumNum(1, 2, 3, 4, 5));
    var add = function (x, y) {
        return x + y;
    };
    write('add:' + add(3, 5));
    var isAdult = function (age) {
        return age >= 19;
    };
    write('isAdult:' + isAdult(20));
    var user2 = {
        name: 'kim'
    };
    function user2ShowName(age, gerder) {
        write('user2ShowName:' + this.name + ', ' + age + ', ' + gerder);
    }
    var nameBind = user2ShowName.bind(user2);
    nameBind(30, 'M');
    function join(name, age) {
        if (typeof age === 'number') {
            return {
                name: name,
                age: age
            };
        }
        else {
            return '나이는 숫자로 입력하세요';
        }
    }
    var sam = join('Sam', 30);
    var jane = join('jane', '30');
    write('sam: ' + JSON.stringify(sam));
    write('jane: ' + jane);
    var toyCar = {
        name: '라니',
        color: 'yellow',
        wheels: 4,
        price: 10000,
        start: function () {
            write("".concat(this.name, " - \uCEEC\uB7EC:").concat(this.color, ", \uBC14\uD034:").concat(this.wheels, ", \uAC00\uACA9:").concat(this.price));
        }
    };
    toyCar.start();
}
tsInit2();
function tsInit3() {
    var user = {
        name: 'kim',
        job: 'police'
    };
    write('job: ' + JSON.stringify(user));
    var student = {
        name: 'an',
        grade: 3
    };
    write('student: ' + JSON.stringify(student));
    function getGift(gift) {
        if (gift.name === 'car') {
            gift.start();
        }
        else {
            gift.call();
        }
    }
    var _gift = {
        name: 'car',
        color: 'red',
        start: function () {
            write('car start');
        }
    };
    getGift(_gift);
    var toyCar = {
        name: '타요',
        start: function () {
            write("".concat(this.name, " - \uCEEC\uB7EC:").concat(this.color, ", \uAC00\uACA9:").concat(this.price));
        },
        color: 'red',
        price: 100
    };
    toyCar.start();
}
tsInit3();
function tsInit4() {
    var User = (function () {
        function User(name) {
            this.name = name;
        }
        User.prototype.start = function () {
            write("".concat(this.name, " start"));
        };
        return User;
    }());
    var kim = new User('kim');
    kim.start();
    var Bmw = (function () {
        function Bmw(color) {
            this.wheels = 4;
            this.color = color;
        }
        Bmw.prototype.start = function () {
            write('bmw: bmw start');
        };
        return Bmw;
    }());
    var bmw = new Bmw('red');
    write('bmw:' + JSON.stringify(bmw));
    bmw.start();
    var benz = {
        door: 5,
        stop: function () {
            write('benz: benz stop');
        },
        wheels: 4,
        color: 'red',
        start: function () {
            write('benz: benz start');
        }
    };
    benz.stop();
}
tsInit4();
function tsInit5() {
    var Car = (function () {
        function Car(color, name) {
            if (name === void 0) { name = 'car'; }
            this.color = color;
            this.name = name;
        }
        Car.prototype.start = function () {
            write('BMW2 wheels :' + Car.wheels);
        };
        Car.wheels = 4;
        return Car;
    }());
    var Bmw = (function (_super) {
        __extends(Bmw, _super);
        function Bmw(color, name) {
            return _super.call(this, color, name) || this;
        }
        Bmw.prototype.showName = function () {
            write('BMW2 showName: ' + this.name);
            _super.prototype.start.call(this);
        };
        Bmw.prototype.doSomething = function () {
            write('BMW2 doSomething color: ' + this.color);
        };
        return Bmw;
    }(Car));
    var z4 = new Bmw('black', 'z4');
    z4.showName();
    z4.doSomething();
}
tsInit5();
function tsInit6() {
    function getSize(arr) {
        return arr.length;
    }
    var arr1 = [1, 2, 3, 4, 5];
    write('getSize:' + getSize(arr1));
    var arr2 = ['a', 'b', 'c'];
    write('getSize:' + getSize(arr2));
    var arr3 = [true, true, false, false];
    write('getSize:' + getSize(arr3));
    var m1 = {
        name: 's22',
        price: 1000,
        option: {
            color: 'red',
            coupon: false
        }
    };
    write(m1.name + ': ' + JSON.stringify(m1.option));
    var m2 = {
        name: 's21',
        price: 900,
        option: {
            color: 'blue',
            coupon: true
        }
    };
    write(m2.name + ': ' + JSON.stringify(m2.option));
    var m3 = {
        name: 's21',
        price: 800,
        option: 'none'
    };
    write(m3.name + ': ' + m3.option);
    var user = { name: 'anoju', age: 44 };
    var car = { name: '쏘렌토', color: 'gray' };
    var book = { price: 10000 };
    function showName(data) {
        return data.name;
    }
    write('user name: ' + showName(user));
    write('car name: ' + showName(car));
}
tsInit6();
function tsInit7() {
    var uk = 'name';
    var admin = {
        id: 1,
        name: 'Bob'
    };
    var admin2 = {
        id: 1,
        name: 'Bob',
        age: 30
    };
    var admin3 = {
        id: 1,
        name: 'Bob'
    };
    var score = {
        1: 'A',
        2: 'C',
        3: 'B',
        4: 'B',
        5: 'A',
        6: 'B'
    };
    function isValid(user) {
        var result = {
            id: user.id > 0,
            name: user.name !== '',
            age: user.age > 0
        };
        return result;
    }
    var user = {
        id: 5,
        name: 'anoju',
        age: 44
    };
    write('isValid : ' + JSON.stringify(isValid(user)));
    var admin4 = {
        id: 123,
        name: 'Bod'
    };
    var admin5 = {
        age: 50,
        gender: 'm'
    };
    var t2 = '가나다';
    var t4 = '가나다';
}
tsInit7();
function tsInit8() {
    var _title = document.querySelector('#title');
    if (!!_title)
        _title.innerHTML = '반가워요';
    if (_title instanceof Element)
        _title.innerHTML = '반갑나?';
    if ((_title === null || _title === void 0 ? void 0 : _title.innerHTML) !== undefined)
        _title.innerHTML = '반가워요22';
    var _link = document.querySelector('.link');
    var _changeLink = 'https://kakao.com';
    if (_link instanceof HTMLAnchorElement) {
        _link.href = _changeLink;
    }
    var _button = document.querySelector('#button');
    _button === null || _button === void 0 ? void 0 : _button.addEventListener('click', function () {
        write('_button click');
    });
}
tsInit8();
//# sourceMappingURL=index.js.map