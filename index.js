var myName1 = 'kim';
var myName2 = ['kim', 'an'];
var myName3 = { name: 'kim' };
var myName4 = {};
var myName5 = 'kim';
var myName6 = 'kim';
function fnEvent1(x) {
    return x * 2;
}
var log = fnEvent1(123);
console.log(log);
var john = [4, true];
var john2 = {
    name: 'john',
    age: 32
};
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
