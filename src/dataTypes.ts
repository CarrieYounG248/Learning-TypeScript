/*--------类型注释 start-----------*/

//#布尔值
let isDisable: boolean = false;

//#数值
let dataCount: number = 6;
//二、八、十、十六进制， NaN、Infinity

//#字符串
let userName: string = 'admin';
//模板字符串
let remark: string = `This person's name id ${userName}.`;

//#空值
let disable: void = null;
//JS没有void概念，只能赋值为undefined 和null

//#null
let dataIsNull: null = null;
//#undefined
let dataIsUndefined: undefined = undefined;
//null 和 undefined 只能被赋值为自身，是所有类型的子类型

//#任意值
let age: any = 1;
age = "one";

//#联合
//类型别名
type Name = string;
let day: Name | number;
day = "seven";
// console.log(day.length);
day = 7;
// console.log(day.length);
// day = true;
//访问共有的属性和方法

//#对象 用接口定义
//形状与接口必须一致
interface Person {
    readonly id: number;   //只读属性
    name: string;
    age: number;
    gender?: string;   //可选属性
    [propName: string]: any;   //任意属性?
}
let carrie: Person = {
    id: 248,
    name: 'Carrie',
    age: 7
}
carrie.age = 8;
let henson: Person = {
    id: 249,
    name: 'Henson',
    age: 8,
    career: "student",
    habby: "dance"
}
// henson.id = 250;
//接口 
//用于对「对象的形状（Shape）」进行描述
//对类的一部分行为进行抽象

//类  ES6 + new
abstract class Animal {       //抽象类  不能被实例化
    public name: string;
    public constructor(name: string) {
        this.name = name;
    }
    public abstract sayHi(): void;
}

class Cat extends Animal {
    public sayHi() {
        console.log(`Meow, My name is ${this.name}`);
    }
}

let cat = new Cat('Tom');

//类与接口
//类实现接口：与C#或Java里接口的基本作用一样，TypeScript也能够用它来明确的强制一个类去符合某种契约
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;         //描述一个方法
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) {              //实现该方法
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}
//接口继承接口、类

//#数组
//类型 + 方括号
let mapIDs: number[] = [1, 2, 3, 4, 5];
//数组泛型
let group: Array<Person> = [carrie, henson];
//接口
interface Ids {
    [index: number]: number;
}
let cardIDs: Ids = [1, 2, 3, 4];
interface days {
    [i: string]: number;
}
let dayIDs: days = { "one": 1, "two": 2, "three": 3, "four": 4 };

//元组
let myInfo: [string, number];
myInfo = ['carrie', 25];
myInfo[0] = 'carrie';
myInfo.push("female");
// myInfo.push(true);
//!当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型

//#函数
//函数声明
function sum(a: number = 1, b: number): number {
    return a + b;
}
console.log(1, 2);  //参数不多不少
//函数表达式
let sub: (a: number, b: number) => number;
//!注意TS箭头用来表示函数的定义，输入类型 => 输出类型
sub = function (a: number, b: number): number {
    return a - b;
}
//接口
interface Multi {
    (a: number, b: number, c?: number): number;  //！可选参数必须在必需参数后面
}
let myMulti: Multi = function (a: number, b: number) {
    return a * b;
}
function multi(a: number = 1, b: number): number {//添加了默认值的参数识别为可选参数，不受位置限制了
    return a * b;
}
//rest 参数只能是最后一个参数
function push(arr: number[], ...items: any[]) {
    items.forEach(function (item) {
        arr.push(item);
    });
}
// let a = [];
let a: number[] = [];
push(a, 1, 2, 3);

//内置对象
//ECMAScript 的内置对象
// let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;
//DOM 和 BOM 的内置对象
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function (e: MouseEvent) {
    // Do something
});

//字符串字面量
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}
handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
// handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'

//枚举 来源于 C#
enum Days { Sun = 1, Mon, Tue, Wed, Thu, Fri, Sat }
console.log(Days["Sun"] === 1); // true
console.log(Days["Sat"] === 7); // true

console.log(Days[1] === "Sun"); // true
console.log(Days[7] === "Sat"); // true
//未手动赋值的枚举项会接着上一个枚举项递增
//常数项 计算所得项
enum Color {Red, Green, Blue = "blue".length}
//常数枚举
const enum Directions { Up, Down, Left, Right }
//会在编译阶段被删除，并且不能包含计算成员
//外部枚举
declare enum Padding { Up, Down, Left, Right }



/*--------类型注释 end-----------*/
