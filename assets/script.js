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

// script form contact

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwaoJ0e7YjGdBYMkSCJ90ZufdHVUemr9okPsQrkAAYKqczcFuMifKExrCiodHCSxwDBXw/exec ";
const form = document.forms["form_contact"];
function success() {
  Swal.fire({
    icon: "success",
    title: "Success!",
    text: "Your operation was completed.",
  });
}
function error() {
  Swal.fire({
    icon: "error",
    title: "Error!",
    text: "Something went wrong. Please try again later.",
  });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // proses Loading
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // loading
      success();
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => {
      error();
      console.error("Error!", error.message);
      form.reset();
    });
});
