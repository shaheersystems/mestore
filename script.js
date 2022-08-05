const closeMsg = document.querySelector(".close-msg");
const message = document.querySelector(".message");
const openDrawer = document.querySelector(".toggle-btn");
const closeDrawer = document.querySelector(".close-toggle-btn");
const drawer = document.querySelector(".drawer");
closeMsg.addEventListener("click", () => {
  message.style.display = "none";
});
openDrawer.addEventListener("click", () => {
  drawer.classList.toggle("open");
});
closeDrawer.addEventListener("click", () => {
  drawer.classList.remove("open");
});
