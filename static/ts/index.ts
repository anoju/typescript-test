const myName1: string = 'kim';
const myName2: string[] = ['kim', 'an'];
const myName3: { name: string } = { name: 'kim' };
const myName4: { name?: string } = {};
const myName5: string | number = 'kim';

type MyType = string | number;
const myName6: MyType = 'kim';

function fnEvent1(x: number): number {
  return x * 2;
}
const log = fnEvent1(123);
console.log(log);

type Member = [number, boolean];
const john: Member = [4, true];

type Member2 = {
  // name: string,
  // age: number
  [key: string]: string | number;
};
const john2: Member2 = {
  name: 'john',
  age: 32
};

class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const _title = document.querySelector('#title');
if (!!_title) _title.innerHTML = '반가워요';
if (_title instanceof Element) _title.innerHTML = '반갑나?';
if (_title?.innerHTML !== undefined) _title.innerHTML = '반가워요22';

// const _title2 = document.querySelector('#title') as Element; // 최대한 지양
// _title2.innerHTML = '방가';

const _link = document.querySelector('.link');
const _changeLink = 'https://kakao.com';
// if (!!_link) _link.href = _changeLink;
if (_link instanceof HTMLAnchorElement) {
  _link.href = _changeLink;
}

const _button = document.querySelector('#button');
_button?.addEventListener('click', function () {
  console.log('click');
});
