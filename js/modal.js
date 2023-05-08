const overlay = document.querySelector("#overlay");
const modalBtn = document.querySelector("#show-modal");
const closeBtn = document.querySelector(".close-popup");
const modal = document.querySelector(".popup");

modalBtn.addEventListener("click", function() {
    overlay.style.display = "block";
    modal.classList.add("active");
});

closeBtn.addEventListener("click", function() {
    overlay.style.display = "none";
    modal.classList.remove("active");
});

overlay.addEventListener("click", function() {
    overlay.style.display = "none";
    modal.classList.remove("active");
});

