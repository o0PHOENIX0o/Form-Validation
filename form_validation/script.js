// Function to change the border of an element with the given ID
function changeBorder(id, addRedBorder = true) {
    const field = document.getElementById(id);
    field.style.border = addRedBorder ? '2px solid red' : '';
}

// Function to set an error message for an element with the given ID
function setError(id, error) {
    var er = document.querySelector(`#${id} + .error`);
    er.textContent = error;
}

// Function to clear all error messages in the form
function clearErrors() {
    // Get all elements with the "error" class
    errors = document.getElementsByClassName("error");

    // Loop through each error element and clear its content
    for (let i of errors) {
        i.textContent = "";
    }
}

// Function to validate the entire form
function validateForm() {
    const name = document.forms['myForm']['fname'].value;
    const email = document.forms['myForm']['femail'].value;
    const phone = document.forms['myForm']['fphone'].value;
    const password = document.forms['myForm']['fpassword'].value;
    const password2 = document.forms['myForm']['fpassword2'].value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var returnval = true; // Variable to track overall form validity
    clearErrors(); // Clear any previous error messages

    // Validate Name
    if (name.length < 5 || !isNaN(name)) {
        setError("Name", "Name must be at least 5 characters");
        changeBorder("Name");
        returnval = false; // Set overall validity to false
    } else { changeBorder("Name", false); } // Remove red border if valid

    // Validate Email
    if (!emailRegex.test(email)) {
        setError("Email", "Enter a valid email address");
        changeBorder("Email");
        returnval = false;
    } else { changeBorder("Email", false); }  // Remove red border if valid


    // Validate Phone Number
    if (phone.length !== 10 || isNaN(phone)) {
        setError("Phone", "Enter a valid 10-digit phone number");
        changeBorder("Phone");
        returnval = false;
    } else { changeBorder("Phone", false); }  // Remove red border if valid


    // Validate Password
    if (password.length < 8) {
        setError("Password", "Password must be at least 8 characters");
        changeBorder("Password");
        returnval = false;
    } else { changeBorder("Password", false); }  // Remove red border if valid


    // Validate Confirm Password
    if (password !== password2 || password2 == "") {
        setError("Password2", "Passwords do not match");
        changeBorder("Password2");
        returnval = false;
    } else { changeBorder("Password2", false); }  // Remove red border if valid

    // Return the overall form validity
    return returnval;
}


