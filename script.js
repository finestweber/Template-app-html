const wrapper = document.querySelector(".wrapper");
const backBtn = document.querySelector(".back-btn");
const menuBtn = document.querySelector(".menu-btn");

const toogleScreen = () => {
  wrapper.classList.toggle("show-category");
};

menuBtn.addEventListener("click", toogleScreen);
backBtn.addEventListener("click", toogleScreen);

const addTask = document.querySelector(".menu-btn");

