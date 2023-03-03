import DOMPurify from "/DOMPurify-main/src/purify.js";

function confirmFunction(event) {
    let confirmValue = confirm("Do you confirm this?").toString();
    document.getElementById("output").innerHTML = ('Confirm result:' + confirmValue);
}

function promptFunction(event) {
    let promptValue = prompt("What is your name?");

    // the following checks whether the user cancels or answers the form
    if (promptValue != null) {
        document.getElementById("output").innerHTML = ('Prompt result:' + promptValue);
    }
    else {
        document.getElementById("output").innerHTML = ("Prompt result: User Didn't Enter Anything");
    }
}

function saferPromptFunction(event) {
    let saferPromptValue = prompt("What is your name?");



    // the following checks whether the user cancels or answers the form
    if (saferPromptValue != null) {
        // makes sure the input is valid
        saferPromptValue = DOMPurify.sanitize(saferPromptValue);
        document.getElementById("output").innerHTML = ('Prompt result:' + saferPromptValue);
    }
    else {
        document.getElementById("output").innerHTML = ("Prompt result: User Didn't Enter Anything");
    }
    
}

function buttons() {

    // assign the buttons to each constant
    const alertButton = document.getElementById('alert');
    const confirmButton = document.getElementById('confirm');
    const promptButton = document.getElementById('prompt');
    const saferPromptButton = document.getElementById('safer_prompt');

    // check for the click event for each button, then call appropriate function
    alertButton.addEventListener('click', () => 
    {
        alert("Alert Pressed!");
    })
    confirmButton.addEventListener('click', confirmFunction);
    promptButton.addEventListener('click', promptFunction);
    saferPromptButton.addEventListener('click', saferPromptFunction);
}

document.addEventListener('DOMContentLoaded', buttons);
