const menuTogle = document.getElementsByClassName("menu-togle")[0];
const menu = document.getElementsByClassName("nav-links")[0];
const checkbox = document.getElementById("checkbox");

menuTogle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
menu.addEventListener("click", function () {
  checkbox.checked = !checkbox.checked;
  menu.classList.toggle("hidden");
});
document.addEventListener("DOMContentLoaded", () => {
  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  const contents = document.querySelectorAll(".anim");
  contents.forEach((content) => {
    observer.observe(content);
  });
});
