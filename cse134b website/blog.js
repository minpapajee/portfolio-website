import { cancelForm, submitForm } from './popup.js';
export {blogs, listBlogs};
window.addEventListener("DOMContentLoaded", init);

// holds all blog posts
// takes stringified items from local storage
// or if empty, creates an array
var blogs = JSON.parse(localStorage.getItem("blog-posts")) || []; 


function init() {

const createButton = document.querySelector("#add-button");
createButton.addEventListener('click', (event) => {

    const dialog = document.getElementById("popup");
    dialog.open = true;

});

// closes form when cancel is clicked
const cancelButton = document.getElementById("cancel");
cancelButton.addEventListener('click', cancelForm);

// submits post when save is clicked
const submitButton = document.getElementById("save");
submitButton.addEventListener('click', submitForm);
}

// list all blogs when site is loaded
listBlogs();

/** 
 * Displays all the blogs stored in the array into an unordered list.
 * */ 
function listBlogs() {
    // create the innerHTML of the unordered list of blogs
    let list = "";
    for (let i = 0; i < blogs.length; i++) {
        list += "<li>";
        list += blogs[i].stringValue;
        list += " <span class=\"delete\" onclick='deleteBlog(" + i + ")'>Delete</span> ";
        list += "<span class=\"edit\" onclick='editBlog(" + i + ")'>Edit</span></li>";
    }

    // transfers list of blogs onto the HTML unordered list
    document.getElementById("posts").innerHTML = list;
}

