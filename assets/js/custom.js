let label = document.querySelector("#label");
let navList = document.querySelector(".nav-list");

label.addEventListener("click", () => {
    label.classList.toggle("active");
    document.body.classList.toggle("overflow-y-hidden");
    navList.classList.toggle("active");
})