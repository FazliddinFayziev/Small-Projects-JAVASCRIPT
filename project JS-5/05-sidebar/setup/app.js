const toggleBtn = document.querySelector(".sidebar-toggle");
const cloaseBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar")

toggleBtn.addEventListener("click",  function() {
    // if (sidebar.classList.contains("show-sidebar")){
    //     sidebar.classList.remove("show-sidebar");
    // }
    // else {
    //     sidebar.classList.add("show-sidebar");
    // }
    sidebar.classList.toggle("show-sidebar");
});

cloaseBtn.addEventListener("click", function() {
    sidebar.classList.remove("show-sidebar");
});