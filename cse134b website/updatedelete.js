import {listBlogs, blogs} from './blog.js';
export {editIndex};

window.edit = false; // denotes edit or add mode for popup
var editIndex;

// add to window to make functions global
window.editBlog = editBlog;
window.deleteBlog = deleteBlog;

function editBlog(index){
    let titleInput = document.getElementById("title");
    let dateInput = document.getElementById("date");
    let summaryInput = document.getElementById("summary");

    titleInput.value = blogs[index].title;
    dateInput.value = blogs[index].date;
    summaryInput.value = blogs[index].summary;

    // open popup
    const dialog = document.getElementById("popup");
    dialog.open = true;

    edit = true;
    editIndex = index;
}

function deleteBlog(index){
    blogs.splice(index,1);
    localStorage.setItem("blog-posts",JSON.stringify(blogs));
    listBlogs();
}