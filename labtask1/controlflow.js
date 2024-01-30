if(age >=18)
{
    console.log("Adult");

}
else if (age>=13)
{
    console.log("Teenager");

}
else
{
    console.log("minor");
}

let age=16;
let status;

switch(true)
{
    case age >=18:
    status="Adult";
    break;

    case age >=13:
        status="teenager";
        break;

    default:
        status="minor";    
}
console.log(status);

let x=['a','b','c','d','e'];

let i=0;
while(i<4)
{
    console.log(x[i]);
    i++;
}

let j=0;
do{
    console.log(x[j]);
    j++;
} while(j<2);

for(let i in x)
{
    console.log(x[i]);
}

for(let i of x)
{
    console.log(i);
}
