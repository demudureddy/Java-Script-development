// If Else condition Example
var courseCompleted = true;
var practiceCompleted = false;
if(courseCompleted && practiceCompleted){
    console.log("you will get a job soon");
}
else if(courseCompleted && !practiceCompleted){
    console.log("please start practicing");
}
else{
    console.log("please join any course");
}


// For loop Example to display from 1 - 10 values
var output = '';
for(var i=1; i<=10; i++){
    if(i <= 9){
        output += i + " , ";
    }
    else{
        output += i ;
    }
}
console.log(output);
document.getElementById('display').
    innerHTML = output;


// While loop Example to display from 1 - 10 values
output = '';
var j = 0;
while(j <= 10){
    if(j <= 9){
        output += j + " * ";
    }
    else{
        output += j ;
    }
    j++;
}
console.log(output);
document.getElementById('display'). innerHTML = output;





// Do while loop Example to display from 1 - 10 valuesoutput = '';
var k = 1;
do{
    if(k <= 9){
        output += k + " * ";
    }
    else{
        output += k ;
    }
    k++;
}while(k <= 10);
console.log(output);
document.getElementById('display'). innerHTML = output;





// Switch Statement Example to display full Day
var today = new Date().getDay();
output = 'Today  is : ';
switch(today) {
    case 0:
        output += 'Sunday';
        break;
    case 1:
        output += 'Monday';
        break;
    case 2:
        output += 'Tuesday';
        break;
    case 3:
        output += 'Wednesday';
        break;
    case 4:
        output += 'Thursday';
        break;
    case 5:
        output += 'Friday';
        break;
    case 6:
        output += 'Saturday';
        break;
    default:
        output += 'No Day';
        break;
}
console.log(output);
document.getElementById('display').innerHTML = output;

