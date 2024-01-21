const icon = document.querySelector(".nav-bar .icon i");
const navUl = document.querySelector(".nav-bar ul");

icon.addEventListener("click", function () {
  navUl.classList.toggle("show");
});

onscroll = (e) => {
  navUl.classList.remove("show");
};
