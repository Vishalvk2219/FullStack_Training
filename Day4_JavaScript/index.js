// declare variables

let a;
let b;
let c;

// declare multiple variable with different values

let [x,y,z]=[4,5,6];

// declare multiple variable with same values

let one=two=three=5;

//operators

/*
1. Arithmetic Operator
2. Comparison Operator
3. Logical Operator
4. String Operator
5. Ternary Operator
6. Assignment Operator
7. Bitwise Operator
8. Type Operator
*/


//Arithmetic Operator
let s=0;
s+2;
console.log(s);
s-1;
console.log(s);

// Comparison operator

console.log(x>y);
console.log(x==y);
console.log(1==='1');

//Logical Operator

console.log(1&&2);
console.log(true||false);

// String Operator

let st='name';
console.log(st+' '+'World');
st+='Earth';
console.log(st);

//  Ternary Operator

1 ? console.log('It is one') : console.log('it is not one');

// Assignment Operator

z=89;

// Bitwise Operator

console.log(1&36);
console.log(z|y);
console.log(2<<1);
console.log(5<<1);

//Type Operator

console.log(typeof(x))
// instanceof for object

//  Conditional Statement

if (true){

}
else{

}

switch(1){
    case 1 :
        break
    case 2:
        break
}

// Loops
for (let i = 1; i <= 5; i++) {
    console.log("For Loop Count:", i);
}

let count = 1;
while (count <= 5) {
    console.log("While Loop Count:", count);
    count++;
}

let num = 1;
do {
    console.log("Do While Count:", num);
    num++;
} while (num <= 5);


// Functions
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Vishal");

const square = function(num) {
    return num * num;
};
console.log(square(5));

const add = (a, b) => a + b;
console.log(add(3, 4));
