//get the input fields
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var phonenumber = document.querySelector('#phonenumber');
var password = document.querySelector('#password');
var confirmpassword = document.querySelector('#password_confirm');



//get the error message
var user_error = document.querySelector('#name_error');
var email_error = document.querySelector('#email_error');
var phonenumber_error =document.querySelector('#phonenumber_error');
var password_error = document.querySelector('#password_error');


//Hookup eventlisteners for 'blur' event
username.addEventListener('blur',userverify);
email.addEventListener('blur',emailverify);
phonenumber.addEventListener('blur',phonenumberverify);
password.addEventListener('blur',passwordverify);
confirmpassword.addEventListener('blur',confirmpasswordverify);


function validate() {
    var result = true;

    //Required Username Validation
    if(username.value === ''){
        username.style.borderColor = 'red';
        user_error.textContent = 'userName is required';
        user_error.style.color = 'red';
        result = false;
        return result;
    }

    //username length 3 validation
    if(username.value.length < 3){
        username.style.borderColor = 'red';
        user_error.textContent = 'Enter Atleast 3 Characters';
        user_error.style.color = 'red';
        result = false;
        return result;

    }
    //phonenumber validation
    if(phonenumber.value === ''){
        phonenumber.style.borderColor = 'red';
        phonenumber_error.textContent = 'phonenumber is required';
        phonenumber_error.style.color = 'red';
        result = false;
        return result;
    }

    //reuired email validstion
    if(email.value === ''){
        email.style.borderColor = 'red';
        email_error.textContent = 'Email is required';
        email_error.style.color = 'red';
        result = false;
        return result;

    }

    //required password validation
    if(password.value === ''){
        password.style.borderColor = 'red';
        password_error.textContent = 'password is required';
        password_error.style.color = 'red';
        result = false;
        return result;
    }

    //Required confirm password validation
    if(confirmpassword.value === ''){
        confirmpassword.style.borderColor = 'red';
        password_error.textContent = 'Confirm password is Required';
        password_error.style.color = 'red';
        result = false;
        return result;
    }

    //password match validation
    if(password.value !== confirmpassword.value){
        password.style.borderColor = 'red';
        confirmpassword.style.borderColor = 'red';
        password_error.textContent = "passwords didn't match";
        password_error.style.color = 'red';
        result = false;
        return result;
    }

    if(result === false){
        return false;
    }
    else{
        alert('form submitted')
    }

}

//user verify
function userverify() {
    username.style.borderColor = 'gray';
    user_error.textContent = '';

}

//Email verify
function emailverify() {
    email.style.color = 'gray';
    email_error.textContent = '';


}
//phonenumber verify
function phonenumberverify() {
    phonenumber.style.color = 'gray';
    phonenumber_error.textContent = '';

}
//password verify
function passwordverify() {
    password.style.borderColor = 'gray';
    password_error.textContent = '';


}

//confirmpassword verify
function confirmpassword() {
    confirmpassword.style.borderColor = 'gray';
    password_error.textContent = '';

}