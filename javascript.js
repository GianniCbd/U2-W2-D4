document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector(".hero");

  setTimeout(function () {
    hero.classList.add("active");
  }, 2000);
});
