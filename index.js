const showPicsBtn = document.getElementById("show-pics-btn");
const pictureContainer = document.getElementById("picture-container");

showPicsBtn.addEventListener("click", function () {
  pictureContainer.classList.toggle("visible");
});
