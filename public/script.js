//navbar scroll transparent
const navEl = document.querySelector('.navbar');
const toTop = document.querySelector('.scroll-top')
window.addEventListener('scroll', () => {
    if (window.scrollY > 19) {
        navEl.classList.add('navbar-scrolled');
    }else{
        navEl.classList.remove('navbar-scrolled');
    }
    if (window.scrollY >= 220) {
        toTop.classList.add('active-scroll');
    }else if (window.scrollY < 220) {
        toTop.classList.remove('active-scroll');
    }
});
// finish navbar scroll transparent




//ketika hamburger di click
const navbarNav = document.querySelector('.navbar-nav');
const menu_btn = document.querySelector('.hamburger');


document.querySelector('#hamburger').
onclick = () => {
    navbarNav.classList.toggle('active');
    menu_btn.classList.toggle('is-active');
};
// finish ketika hamburger di klik


// start klik diluar sidebar untuk mengilangkan sidebar
const hamburger = document.querySelector
('#hamburger');

document .addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
    menu_btn.classList.remove('is-active');
    }

});
// finish klik diuar side bar untuk menghilangkan sidebar


// start pop up
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-up');
        } else {
            entry.target.classList.remove('show-up');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-up');
hiddenElements.forEach((el) => observer.observe(el));
// finish pop up


// start pop left
const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show-left');
        } else {
            entry.target.classList.remove('show-left');
        }
    });
});

const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((el) => observerLeft.observe(el));
// finish pop right


// start slider
var slides = document.querySelectorAll('.slide');
var btne = document.querySelectorAll('.btns');
let currentSlide = 1;


var manualNav = function(manual){
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btne.forEach((btns) => {
            btns.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btne[manual].classList.add('active');
}

btne.forEach((btns, i) => {
    btns.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btne[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();   
// slider finish








let previewContainer = document.querySelector('.product-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

// start select by value button
// document.querySelectorAll('#btnport').forEach(btnport =>{
//     btnport.onclick = () => {
//         previewContainer.style.display= 'flex';
//         let name = btnport.getAttribute('data-name');
//         previewBox.forEach(preview =>{
//             let target = preview.getAttribute('data-target');
//             if(name == target) {
//                 preview.classList.add('active');
//             }
//         });
//     };
// });

// previewBox.forEach(close =>{
//     close.querySelector('.x').onclick = () =>{
//         close.classList.remove('active');
//         previewContainer.style.display='none';
//     };
// });
// finish select by value button
