const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close');
const btnPopup2 = document.querySelector('.btnSignup-popup');
const btnPopup3 = document.querySelector('.getStarted');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});
btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});
btnPopup2.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup','active');
});
btnPopup3.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup','active');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});


// Include Ionicons library
const ioniconsModule = document.createElement("script");
ioniconsModule.type = "module";
ioniconsModule.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
document.head.appendChild(ioniconsModule);

const ioniconsNoModule = document.createElement("script");
ioniconsNoModule.setAttribute("nomodule", "");
ioniconsNoModule.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
document.head.appendChild(ioniconsNoModule);