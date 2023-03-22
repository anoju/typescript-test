const myName1: string = 'kim';
const myName2: string[] = ['kim','an'];
const myName3: {name:string} = {name:'kim'};
const myName4: {name?:string} = {};
const myName5: string | number = 'kim';


type MyType = string | number;
const myName6: MyType = 'kim';


function fnEvent1(x: number):number{
  return x * 2;
}
const log = fnEvent1(123)
console.log(log);


type Member = [number, boolean];
const john: Member = [4, true];


type Member2 = {
  // name: string,
  // age: number
  [key: string]: string | number
}
const john2: Member2 = {
  name: 'john',
  age: 32
}

class User{
  name: string;
  constructor(name:string){
    this.name = name;
  }
}
