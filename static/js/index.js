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
var User = (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
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
    console.log('click');
});
//# sourceMappingURL=index.js.map