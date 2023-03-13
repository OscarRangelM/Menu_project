const navToggle =document.querySelector(".side-bar__burger_input");
const sideBar= document.getElementById('side-bar');

navToggle.addEventListener("click",()=>{
    sideBar.classList.toggle("toggle__bar");
});