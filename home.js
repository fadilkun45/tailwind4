// cek storage apakah ada key theme ada atau tidak di localstorage
// key theme adalah key yang menyimpan status darkmode
window.addEventListener("DOMContentLoaded", (event) => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.toggle("dark");
  } else {
    return;
  }
});

let toggle = document.querySelector(".toggle");
let navlink = document.querySelector(".nav-link");
let closeToggle = document.querySelector(".close");
let openToggle = document.querySelector(".open");




toggle.addEventListener("click", function () {
  navlink.classList.toggle("hidden");
  closeToggle.classList.toggle("hidden");
  openToggle.classList.toggle("hidden");
  document.body.classList.toggle('overflow-hidden')
});

let btnToggleDarkMode = document.querySelector(".nav-link button");

btnToggleDarkMode.addEventListener("click", function () {
  document.body.parentElement.classList.toggle("dark");
  if (localStorage.theme === undefined) {
    window.localStorage.setItem("theme", "dark");
    console.log(window.localStorage.theme);
  } else {
    window.localStorage.removeItem("theme");
    console.log(window.localStorage.theme);
  }
});

window.addEventListener('scroll',function(){
  let navbar = document.querySelector('nav');
  navbar.classList.toggle('sticky',window.scrollY > 300)
  navbar.classList.toggle('top-0',window.scrollY > 300)
})
