function greet(name)
{
    console.log(`hello, ${name}!`);
}
greet("zayed");

function sum(a,b)
{
    return a+b;
}
let result = sum(1,2);
console.log(result);

let greet = name => console.log(`hello, ${name}!`)
greet("Zayed");

const greet = function(name)
{
    console.log(`hello,${name}!`);

};
greet("Alice");

function operateOnNumbers(a,b,operation)
{
    return operation(a,b);
}

function add(x,y)
{
    return x+y;
}

function multiply(x,y)
{
    return x*y;
}

let resultAddition = operateOnNumbers(5,3,add);
let resultMultiplication=operateOnNumbers(5,3,multiply);