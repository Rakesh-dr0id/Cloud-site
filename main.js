const collaps = document.querySelectorAll(".collaps");
collaps.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collaps--expanded");
  })
);