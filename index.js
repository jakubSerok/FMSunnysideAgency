const mobileButton = document.querySelector('.mobilebutton');
const mobileMenu = document.querySelector('.mobileMenu');

mobileButton.addEventListener('click',()=>{
    mobileMenu.classList.toggle("hidden");
})