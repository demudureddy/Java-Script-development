// Assignment operator =
var num1 = 10;
console.log("num1 :" + num1);


// Arithmetic operators + - * /
var a = 10;
var b = 20;
var sum = a + b;
console.log("a + b :" + sum);

var mul = a * b;
console.log("a * b :" + mul);


// Short hand math += , -= , *= , /=
a = 10;
b = 20;
var add = 0;
add = add + (a+b); // long way
add += (a+b); //short hand math

console.log('add :' + add);


// Conditional operators < , > , <= , >= , !=
var age = 25;
if(age <= 18){
    console.log("your are minor");
}
else{
    console.log("you are major");
}


// Unary Operator ++ , -- (pre , post)
var x = 10;
x = x + 1; //11
x += 1; //12
x++; //13
console.log('x :' + x); //13


// Logical operators AND , OR
var inRelation = true;
var parentsAgread = false;
if(inRelation && parentsAgread){
    console.log("Get Marry Soon");
}
else{
    console.log("Wait untill parents agreed");
}


// String Concatenation Operator
var str = "10" + 10 + 10 + 10;
console.log('str :' + str);


// Ternary operator (? :)
age = 25;

(age <= 18) ? console.log("you are minor") : console.log("you are major");


// Type of operator
var abc;

console.log('value :' + abc + 'Data Type :' + typeof abc);

abc = 10;
console.log('value :' + abc + 'Data Type :' + typeof abc);

abc = 'test';
console.log('value :' + abc + 'Data Type :' + typeof abc);

abc = true;
console.log('value :' + abc + 'Data Type :' + typeof abc);

abc = null;
console.log('value :' + abc + 'Data Type :' + typeof abc);



// == operator
var a = 10;
var b = "10";
if(a == b){
    console.log("Both are Equal");
}
else{
    console.log("Both are Not Equal");
}


// === operator
var a = 10;
var b = "10";
if(a === b){
    console.log("Both are Equal");
}
else{
    console.log("Both are Not Equal");
}