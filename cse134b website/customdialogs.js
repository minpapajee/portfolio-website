import DOMPurify from "/DOMPurify-main/src/purify.js";

export function alertFunction() {
    var alertDialog = document.getElementById('alertDialog');
    alertDialog.show();
    document.querySelector('#alertOk').onclick = function() {
        alertDialog.close();
    };
}

export function confirmFunction() {
    var confirmDialog = document.getElementById('confirmDialog');
    confirmDialog.show();
    document.querySelector('#confirmOk').onclick = function() {
        document.getElementById("output").innerHTML = ('Confirm result: true');
        confirmDialog.close();
    };
    document.querySelector('#confirmCancel').onclick = function() {
        document.getElementById("output").innerHTML = ('Confirm result: false');
        confirmDialog.close();
    };
}

export function promptFunction() {
    var promptDialog = document.getElementById('promptDialog');
    promptDialog.show();
    document.querySelector('#promptOk').onclick = function() {
        let promptValue = document.getElementById('name').value;
        promptValue = DOMPurify.sanitize(promptValue);
        document.getElementById("output").innerHTML = ('Prompt result:' + promptValue);
        promptDialog.close();
    };
    document.querySelector('#promptCancel').onclick = function() {
        document.getElementById("output").innerHTML = ("Prompt result: User Didn't Input Anything!");
        promptDialog.close();
    };
}

export function buttons() {

    // assign the buttons to each constant
    const alertButton = document.getElementById('alert');
    const confirmButton = document.getElementById('confirm');
    const promptButton = document.getElementById('prompt');

    // check for the click event for each button, then call appropriate function
    alertButton.addEventListener('click', alertFunction);
    confirmButton.addEventListener('click', confirmFunction);
    promptButton.addEventListener('click', promptFunction);
}

