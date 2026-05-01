document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  btn.addEventListener("click", function () {
    nav.classList.toggle("nav-open");
  });
})