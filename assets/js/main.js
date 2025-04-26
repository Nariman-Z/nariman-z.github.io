/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})

sr.reveal(`.home__data`, {origin: 'top', delay: 400})
sr.reveal(`.home__img`, {origin: 'bottom', delay: 600})
sr.reveal(`.home__footer`, {origin: 'bottom', delay: 800})



/*=============== CHANGE BACKGROUND HEADER ===============*/
// Countdown timer
let seconds = 10;
const countdownElement = document.getElementById('countdown');

const countdown = setInterval(function() {
    seconds--;
    countdownElement.textContent = seconds;
    
    if (seconds <= 0) {
        clearInterval(countdown);
        window.location.href = "https://nariman-z.pages.dev";
    }
}, 1000);

// Immediate redirect when button clicked
document.querySelector('.home__button').addEventListener('click', function(e) {
    e.preventDefault();
    clearInterval(countdown);
    window.location.href = "https://nariman-z.pages.dev";
});

// Optional: Immediate redirect if user doesn't have JavaScript
setTimeout(function() {
    window.location.href = "https://nariman-z.pages.dev";
}, 10000);