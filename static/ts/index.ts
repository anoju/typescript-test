function write(txt: string | number | boolean): void {
  const _console = document.querySelector('.console');
  if (_console instanceof Element) {
    const _p = document.createElement('p');
    _p.innerHTML = String(txt);
    _console.appendChild(_p);
  }
}

function tsInit(): void {
  const myName1: string = 'kim';

  const myName2: string[] = ['kim', 'an'];
  const myName2ty2: Array<string> = ['kim', 'an'];
  const num1: number[] = [1, 2, 3];
  const num2: Array<number> = [1, 2, 3];

  let myName3: string | number = 'kim';
  myName3 = 5;

  type MyType = string | number;
  let myName4: MyType = 'kim';
  myName4 = 6;

  //튜플(tuple)
  const ary1: [string, number] = ['a', 1];

  //void
  function sayHello(): void {
    write('hello');
  }
  sayHello();

  //never
  function sayError(): never {
    throw new Error();
  }
  function infLoop(): never {
    while (true) {
      console.log('infLoop');
    }
  }

  //// enum
  // enum Os {
  //   Windows = 3,
  //   Ios = 10,
  //   Android
  // }
  //console.log(Os.Window);
  enum Os {
    Window = 'window',
    Ios = 'ios',
    Android = 'android'
  }
  let myOs: Os;
  myOs = Os.Window;
  write('myOs:' + myOs);

  // null, undefined
  let noneTy1: null = null;
  let noneTy2: undefined = undefined;

  // object + interface
  const myObj1: { name: string; age: number } = { name: 'kim', age: 20 };
  const myObj2: { name: string; age?: number } = { name: 'kim' };

  interface User3 {
    name: string;
    age: number;
  }
  const myObj3: User3 = {
    name: 'kim',
    age: 20
  };
  write('myObj3:' + myObj3.name);

  type Score = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  interface User4 {
    name: string;
    age: number;
    gerder?: string; //gerder는 있어도 되고 없어도 됨
    readonly birth: number; // (X)readonly는 수정못함
    [grade: number]: Score;
  }
  const myObj4: User4 = {
    name: 'kim',
    age: 20,
    birth: 20221225,
    1: 'A'
  };
  myObj4.gerder = 'male';
  // myObj4.birth = 20230125;

  // type
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
}
tsInit();

function tsInit2(): void {
  // function
  function fnEvent1(x: number): number {
    return x * 2;
  }
  const log = fnEvent1(123);
  write('fnEvent1:' + log);

  function showIt(arr: number[]) {
    arr.forEach((item) => {
      write('showIt item:' + item);
    });
  }
  showIt([1, 2, 3]);
  function hello(name?: string): string {
    return `Hello, ${name || 'world'}`;
  }
  write('hello:' + hello());
  write('hello:' + hello('anoju'));

  function hello2(name = 'world'): string {
    return `Hello, ${name}`;
  }
  write('hello2:' + hello2());
  write('hello2:' + hello2('anoju'));

  function hello3(name: string, age?: number): string {
    let txt = `Hello, ${name}.`;
    if (!!age) txt += ` You are ${age}`;
    return txt;
  }
  write('hello3:' + hello3('anoju'));
  write('hello3:' + hello3('anoju', 44));

  function sumNum(...nums: number[]): number {
    return nums.reduce((a, b) => a + b, 0);
  }
  write('sum:' + sumNum(1, 2, 3, 4, 5));

  // function + interface
  interface Add {
    (num1: number, num2: number): number;
  }
  const add: Add = function (x, y) {
    return x + y;
  };
  write('add:' + add(3, 5));
  interface IsAdult {
    (age: number): boolean;
  }
  const isAdult: IsAdult = function (age) {
    return age >= 19;
  };
  write('isAdult:' + isAdult(20));

  interface User2 {
    name: string;
  }
  const user2: User2 = {
    name: 'kim'
  };
  function user2ShowName(this: User2, age: number, gerder: 'M' | 'F') {
    write('user2ShowName:' + this.name + ', ' + age + ', ' + gerder);
  }
  const nameBind = user2ShowName.bind(user2);
  nameBind(30, 'M');

  interface User5 {
    name: string;
    age: number;
  }
  function join(name: string, age: string): string;
  function join(name: string, age: number): User5;
  function join(name: string, age: string | number): User5 | string {
    if (typeof age === 'number') {
      return {
        name,
        age
      };
    } else {
      return '나이는 숫자로 입력하세요';
    }
  }
  const sam: User5 = join('Sam', 30);
  const jane: string = join('jane', '30');
  write('sam: ' + JSON.stringify(sam));
  write('jane: ' + jane);

  interface Car2 {
    color: string;
    wheels: number;
    start(): void;
  }
  interface Toy {
    name: string;
  }
  interface ToyCar extends Toy, Car2 {
    price: number;
  }
  const toyCar: ToyCar = {
    name: '라니',
    color: 'yellow',
    wheels: 4,
    price: 10000,
    start: function () {
      write(`${this.name} - 컬러:${this.color}, 바퀴:${this.wheels}, 가격:${this.price}`);
    }
  };
  toyCar.start();
}
tsInit2();

function tsInit3(): void {
  // 리터럴
  type Job = 'police' | 'hospital' | 'doctor';
  interface User {
    name: string;
    job: Job;
  }
  const user: User = {
    name: 'kim',
    job: 'police'
  };
  write('job: ' + JSON.stringify(user));

  interface HighSchool {
    name: string;
    grade: 1 | 2 | 3;
  }

  const student: HighSchool = {
    name: 'an',
    grade: 3
  };
  write('student: ' + JSON.stringify(student));

  interface Car {
    name: 'car';
    color: string;
    start(): void;
  }

  interface Mobile {
    name: 'mobile';
    color: string;
    call(): void;
  }

  function getGift(gift: Car | Mobile) {
    if (gift.name === 'car') {
      gift.start();
    } else {
      gift.call();
    }
  }
  const _gift: Car = {
    name: 'car',
    color: 'red',
    start() {
      write('car start');
    }
  };
  getGift(_gift);

  interface Car2 {
    name: string;
    start(): void;
  }

  interface Toy {
    name: string;
    color: string;
    price: number;
  }
  const toyCar: Toy & Car2 = {
    name: '타요',
    start() {
      write(`${this.name} - 컬러:${this.color}, 가격:${this.price}`);
    },
    color: 'red',
    price: 100
  };
  toyCar.start();
}
tsInit3();

function tsInit4(): void {
  // class
  class User {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    start() {
      write(`${this.name} start`);
    }
  }
  const kim = new User('kim');
  kim.start();

  // class + interface
  interface Car {
    color: string;
    wheels: number;
    start(): void;
  }
  class Bmw implements Car {
    color;
    wheels = 4;
    constructor(color: string) {
      this.color = color;
    }
    start() {
      write('bmw: bmw start');
    }
  }
  const bmw = new Bmw('red');
  write('bmw:' + JSON.stringify(bmw));
  bmw.start();

  // extends
  interface Benz extends Car {
    door: number;
    stop(): void;
  }
  const benz: Benz = {
    door: 5,
    stop() {
      write('benz: benz stop');
    },
    wheels: 4,
    color: 'red',
    start() {
      write('benz: benz start');
    }
  };
  benz.stop();
}
tsInit4();
function tsInit5(): void {
  /*
  public - 자식클래스, 클래스 인스턴스 모두 접근가능
  protected - 자식 클래스에서 접근가능
  private - 해당 클래스 내부에서만 접근 가능 
  */
  abstract class Car {
    // abstract 선언 시 상속으로 밖에 못씀 new Car()는 에러

    // name: string = 'car';
    // public name: string = 'car'; // 위 선언과 동일(선언이 없으면 public)
    // protected name: string = 'car'; // protected 선언 시 z4.name 못씀
    // private name: string = 'car'; // private선언 시 showName()에서 this.name 못씀, z4.name도 못씀
    readonly name: string; // readonly선언 시 z4.name = 'z4';
    color: string;
    static wheels: number = 4; // static 선언 시 this.wheels 이 아니라 Car.wheels 로 접근 해야함
    constructor(color: string, name: string = 'car') {
      this.color = color;
      this.name = name;
    }
    start() {
      write('BMW2 wheels :' + Car.wheels);
    }
    abstract doSomething(): void; // abstract 선언 시 상속받는 쪽에서 꼭 정의해야함
  }
  class Bmw extends Car {
    constructor(color: string, name?: string) {
      super(color, name);
    }
    showName() {
      write('BMW2 showName: ' + this.name);
      super.start(); // this.start();와 동일
    }
    doSomething() {
      write('BMW2 doSomething color: ' + this.color);
    }
  }

  const z4 = new Bmw('black', 'z4');
  // z4.name = 'z4';
  z4.showName();
  z4.doSomething();
}
tsInit5();

function tsInit6(): void {
  //generic
  function getSize<T>(arr: T[]): number {
    return arr.length;
  }
  const arr1 = [1, 2, 3, 4, 5];
  write('getSize:' + getSize<number>(arr1));
  const arr2 = ['a', 'b', 'c'];
  write('getSize:' + getSize<string>(arr2));
  const arr3 = [true, true, false, false];
  write('getSize:' + getSize<boolean>(arr3));

  interface Mobile<T> {
    name: string;
    price: number;
    option: T;
  }

  const m1: Mobile<object> = {
    name: 's22',
    price: 1000,
    option: {
      color: 'red',
      coupon: false
    }
  };
  write(m1.name + ': ' + JSON.stringify(m1.option));

  const m2: Mobile<{ color: string; coupon: boolean }> = {
    name: 's21',
    price: 900,
    option: {
      color: 'blue',
      coupon: true
    }
  };
  write(m2.name + ': ' + JSON.stringify(m2.option));

  const m3: Mobile<string> = {
    name: 's21',
    price: 800,
    option: 'none'
  };
  write(m3.name + ': ' + m3.option);

  interface User {
    name: string;
    age: number;
  }

  interface Car {
    name: string;
    color: string;
  }
  interface Book {
    price: number;
  }
  const user: User = { name: 'anoju', age: 44 };
  const car: Car = { name: '쏘렌토', color: 'gray' };
  const book: Book = { price: 10000 };
  function showName<T extends { name: string }>(data: T): string {
    return data.name;
  }
  write('user name: ' + showName(user));
  write('car name: ' + showName(car));
  // write('book name: ' + showName(book)); //쓸수 없음
}
tsInit6();

function tsInit7(): void {
  interface User {
    id: number;
    name: string;
    age: number;
    gender: 'm' | 'f';
  }

  //keyof
  type UserKey = keyof User; // 'id' | 'name' | 'age' | 'gender'
  const uk: UserKey = 'name';

  //Partial<T>
  /*
  interface User {
    id?: number;
    name?: string;
    age?: number;
    gender?: 'm' | 'f';
  }
   */
  const admin: Partial<User> = {
    id: 1,
    name: 'Bob'
  };

  interface User2 {
    id: number;
    name?: string;
    age?: number;
  }
  //Required<T>
  /**
  interface User2 {
    id: number;
    name: string;
    age: number;
  }
   */
  const admin2: Required<User2> = {
    id: 1,
    name: 'Bob',
    age: 30
  };
  //Readonly<T>
  const admin3: Readonly<User2> = {
    id: 1,
    name: 'Bob'
  };
  // admin3.id = 4; //Readonly 선언 시 에러

  //Record<K,T>
  type Grade = '1' | '2' | '3' | '4' | '5' | '6';
  type Score = 'A' | 'B' | 'C' | 'D' | 'E' | 'F';
  const score: Record<Grade, Score> = {
    1: 'A',
    2: 'C',
    3: 'B',
    4: 'B',
    5: 'A',
    6: 'B'
  };

  interface User3 {
    id: number;
    name: string;
    age: number;
  }
  function isValid(user: User3) {
    const result: Record<keyof User3, boolean> = {
      id: user.id > 0,
      name: user.name !== '',
      age: user.age > 0
    };
    return result;
  }
  const user: User3 = {
    id: 5,
    name: 'anoju',
    age: 44
  };
  write('isValid : ' + JSON.stringify(isValid(user)));

  interface User4 {
    id: number;
    name: string;
    age: number;
    gender: 'm' | 'f';
  }
  //Pick<K,T>
  const admin4: Pick<User4, 'id' | 'name'> = {
    id: 123,
    name: 'Bod'
  };
  //Omit<K,T>
  const admin5: Omit<User4, 'id' | 'name'> = {
    age: 50,
    gender: 'm'
  };

  //Exclude<T1,T2>
  type T1 = string | number;
  type T2 = Exclude<T1, number>;
  // const t2: T2 = 123; //에러
  const t2: T2 = '가나다';

  //NonNullable: null과 undefined 제거
  type T3 = string | null | undefined | void;
  type T4 = NonNullable<T3>;
  // const t3:T4 = null; //에러
  // const t3:T4 = undefined; //에러
  const t4: T4 = '가나다';
}
tsInit7();

function tsInit8(): void {
  // dom
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
    write('_button click');
  });
}
tsInit8();
