// collect the elements
const myform = document.querySelector("#myform");
const username = document.querySelector("#username");
const greetingspan = document.querySelector(".greeting p span");

// add submit event to form
myform.addEventListener("submit", function(e){
    e.preventDefault(); // prevent form submission
    // collect components when the submit button is clicked
    const usernamevalue = username.value;

    // display a warning message if the username was not entered
    if (usernamevalue.trim() === "") {
        alert("Please enter your username");
        return;
    }

    // display the username in the greeting paragraph
    greetingspan.textContent = usernamevalue;

    // Clear the username input field
    username.value = "";
});

/**
 * Form validation
 */
// collect components
let passworderror = document.querySelector("#passworderror");
let btnlogin = document.querySelector(".btnlogin");
let passwordinput = document.querySelector("#password");

// disable the login button on page load
window.addEventListener("load", function(){
    btnlogin.disabled = true;
});

// add input event to the password field
passwordinput.addEventListener("input", function(){
    // get the password value
    const passwordcount = passwordinput.value;

    // check if the password has 8+ characters
    if (passwordcount.length < 8) {
        passworderror.textContent = "Password must be 8+ characters!";
        btnlogin.disabled = true;
    } else {
        passworderror.textContent = "";
        btnlogin.disabled = false;
    }
});
