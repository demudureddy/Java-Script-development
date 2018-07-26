/*
        Math Object Examples

     */

// Math PI and Sqrt
var pi = Math.PI;
console.log(pi);

var sqrt = Math.sqrt(144);
console.log('sqrt of 144 is :' + sqrt);


// find the min of 4 numbers
var min = Math.min(2,45,78,987,45,4,6);
console.log("The Min value is :" + min);


// find the Max of 4 numbers
var max = Math.max(2,45,78,987,45,4,6);
console.log("The Max value is :" + max);



// find the 'x' to the power of 'y' value, ex: 2^4
var pow = Math.pow(2,4);
console.log('2 ^ 4 is : ' + pow);


// generate the random numbers from 0 to 100
var random =
    Math.round(Math.random() * 100000);
console.log(random);
document.getElementById('display')
    .innerHTML = random + "";


/* For more details about Math Object, please have a look at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

/*
    Date Object Examples

 */

// get today's date
var date = new Date();
console.log(date);



//get proper date
var today = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
console.log(today);


//get full day of the week 0 - 6 getDay()
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





// get full day of the week using switch statement


// Display a Digital Clock on the web page
function digitalClock() {
    var today = new Date();
    var options = {timezone : 'Asia/Kolkata'};
    var time = today.toLocaleTimeString('en-US',options);
    document.getElementById('clock').innerHTML = time;
}
digitalClock();
setInterval(digitalClock,1000);


/* For More Details about Date() please have a look at
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/