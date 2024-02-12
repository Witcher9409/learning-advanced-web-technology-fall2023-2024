let a: number=10;
let b: string="Hello";
let c: boolean = true;

function add(a: number, b: number): number{
    return a+b;
}
console.log(add(10,20));

type Person = {id: number, name: string};
let p: Person = {id: 1,name: "John"};
console.log(p);

let y: number | string;
y=10;
console.log(y);

let z: "Red" | "Green" | "Blue";
z = "Red";
console.log(z);

let data: any;
data= 'something';
console.log(data);

enum Color{Red,Green,Blue};
let color: Color= Color.Red;
console.log(color);

let employee: [number,string];
employee =[1,"steve"];
console.log(employee);

let numbers: number[]=[1,2,3,4,5];

let firstElement: number = numbers[0];

let arrayLength: number = numbers.length;
numbers.push(6);
for(let num of numbers){
    console.log(num);
}

function addNumbers5(a: number, b: number): number{

return a+b;
}
console.log(addNumbers5(10,20));

function addNumbers1(a: number, b: number, c?: number): number{
 return a+b+(c??0);

}

function  addNumbers2(a: number, b: number, c: number = 0): number{
    return a+b+c;

}

function addNumbers3(...nums: number[]): number{
    let sum: number =0;
    for (let num of nums)
    {
        sum += num;
    }
    return sum;
}

function addNumbers4(a: number, b: number): number;
function addNumbers4(a: string, b: string): string;
function addNumbers4(a: any, b: any): any{
    return a+b;
}
console.log(addNumbers4(10,20));

class Employee{
id: number;
name: string;
constructor(id: number, name: string)
{
    this.id= id;
    this.name=name;
}
display(): void
{
    console.log(`Id = ${this.id},Name= ${this.name}`);
}
}
let emp1= new Employee(1,"steve");
emp1.display();