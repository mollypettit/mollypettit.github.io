let btnSubmit = document.getElementById("name");
btnSubmit.addEventListener('click', validate)

//fields to be validated
let txtName = document.getElementById("name");
let txtEmail = document.getElementById("email");
let message = document.getElementById("message");

function testName(){
    //if (!Modernizr.input.required ) {
    if (txtName.value.length == 0) { 
        txtName.setAttribute("class", "omitted"); 
        valid = false; 
    } else { 
        txtName.removeAttribute("class", "omitted"); 
    }     
    //}
}

function testEmail(){
    //if (!Modernizr.inputtypes.email) {
    var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!emailRegExp.test(txtEmail.value)){
        txtEmail.setAttribute("class", "wrongFormat");
        valid = false; 
    } else { 
        txtEmail.removeAttribute("class", "wrongFormat");
    }            
    //}
}

function testMessage(){
    //if (!Modernizr.input.required) {
    if (message.value.length == 0) {
        message.setAttribute("class", "omitted");
        valid = false;
    } else {
        message.removeAttribute("class", "omitted");
    }
    //}
}

function validate() {
    valid = true;
    testName();
    testEmail();
    testMessage();
    if (!valid){
        event.preventDefault();
    } else {
        alert("Form submitted!");
    }
    
}

