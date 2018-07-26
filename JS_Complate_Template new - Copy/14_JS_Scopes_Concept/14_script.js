// functions recap


// Scopes introduction

// Block scoping for FOR loop
for (var i = 0; i<= 10; i++){
    console.log('i value : ' +i);
}
console.log('i value outside for :' +i);

//Block scoping for if Block
var course = 'mpc';
if(course === 'mpc'){
    var dept = 'Engineering';
}
console.log('course name :' + course);
console.log('Dept Name :' + dept);

// Function Scoping

// coding exercises

// 1) output ?

var top = 20;
function something() {
    var inner = 30;
    console.log(inner);
}

// 2) output ?
var top = 20;
function something() {
    var inner = 30;
    console.log(inner);
}
something();

// 3) output ?
var top = 20;
var inner = 50;
function something() {
    var inner = 30;
    console.log(inner);
}
something();

// 4) output ?

var top = 20;
var inner = 50;
function something() {
    var inner = 30;
}
something();
console.log(inner);

// 6) output ?
var name = "Naveen";
function greet(name) {
    console.log("Hello " + name);
}

greet("John");

//  IIFE example
(function () {
    if(course === 'mpc'){
        var dept = 'Engineering';

    }
    console.log('Dept Name :' + dept); //Engineering

})();



// Read and Write Operations for variables




// Read and Write Operations for Functions


// Implications of Read and Write Operations

