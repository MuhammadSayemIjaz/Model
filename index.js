
const closeBtn = document.querySelector(".icon");

const modelDisplay = document.querySelector(".modelOver");

const openModelBtn = document.querySelector(".ModelBtn");

openModelBtn.addEventListener("click", function() {

    modelDisplay.classList.add("showDisplayModel");

});
closeBtn.addEventListener("click", function() {

    modelDisplay.classList.remove("showDisplayModel");

});