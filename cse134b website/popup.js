import { listBlogs, blogs } from './blog.js';
import {editIndex} from './updatedelete.js';
export {cancelForm, submitForm};

function cancelForm() {
    let titleInput = document.getElementById("title");
    let dateInput = document.getElementById("date");
    let summaryInput = document.getElementById("summary");

    // clears input fields
    titleInput.value = "";
    dateInput.value = "";
    summaryInput.value = "";

    // closes popup
    const dialog = document.getElementById("popup");
    dialog.open = false;
}

function submitForm() {
    let titleInput = document.getElementById("title");
    let dateInput = document.getElementById("date");
    let summaryInput = document.getElementById("summary");

    // form validation
    if (titleInput.value === "" || dateInput.value === "" || summaryInput.value === "") {
        return alert("Please Fill All Forms!");
    } 
    
    // combine inputs into one string
    let blogString = titleInput.value + " (" + dateInput.value + ") Summary: " + summaryInput.value;

    let blog = {
        "stringValue" : blogString,
        "title" : titleInput.value,
        "date" : dateInput.value,
        "summary" : summaryInput.value
    };

    // store onto array
    if (!window.edit) {
        blogs.push(blog); 
    }
    else {
        blogs[editIndex] = blog;
        window.edit = false;
    }

    localStorage.setItem("blog-posts",JSON.stringify(blogs));

    

    // clears input fields
    titleInput.value = "";
    dateInput.value = "";
    summaryInput.value = "";

    // closes popup
    const dialog = document.getElementById("popup");
    dialog.open = false;

    listBlogs();
}