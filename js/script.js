document.addEventListener("DOMContentLoaded", function () {
  var headerElement = document.querySelector("header");
  setTimeout(function () {
    headerElement.classList.add("show");
    headerElement.style.transform = "translateY(0)";
  }, 500);
});

document.addEventListener("DOMContentLoaded", function () {
  var navElement = document.querySelector("nav");
  setTimeout(function () {
    navElement.classList.add("show-nav");
  }, 500);
});



document.addEventListener("DOMContentLoaded", function () {
  var asideElement = document.querySelector("aside");
  setTimeout(function () {
    asideElement.classList.add("show");
  }, 1000);
});

