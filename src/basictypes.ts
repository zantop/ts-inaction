console.clear();
console.log("1、布尔类型");
let isDone: boolean = false;
console.log(isDone);

console.log("2、数字类型");
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n;

console.log(decimal, hex, binary, octal);

console.log("3、字符串类型");
let color: string = "blue";
color = "red";
console.log(color);

console.log("4、数组类型");
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];
console.log(list1, list2);

console.log("5、元祖类型");
let x: [string, number];
x = ["hello", 333];
// x = ["hello", 333, 555];
// x = [222, 333]; 出错
console.log(x);

console.log("6、枚举类型");

enum Color {
  red = 2,
  green,
  blue
}
let c: Color = Color.red;
let d: string = Color[3];
console.log(c);
console.log(d);

console.log("7、any类型");
let anytype: any;
anytype = 123;
anytype = "字符";
anytype = [1, 2, 3, 4];
console.log(anytype);
//any类型没有强制的类型检查 可能会引起问题
/*const uncertain: any = "Hello world!";
uncertain.hello();

const dog: any = {
  name: "Fluffy",
  sayHello: () => "woof woof"
};

dog.hello();
*/

/**
与 any 一样，所有类型都可以分配给unknown

 */
console.log("8、unknown类型");

let uncertain: unknown = "Hello"!;
uncertain = 12;
uncertain = { hello: () => "Hello!" };

console.log(uncertain);
//unknown 类型的变量赋值给 any 和 unknown
let notSure1: unknown = uncertain;
let notSure2: any = uncertain;

console.log(notSure1);
console.log(notSure2);

//类型断言缩小范围

console.log("======基础类型=======");
