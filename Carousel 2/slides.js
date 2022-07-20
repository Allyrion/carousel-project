
// DOM elements

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector (".prev");
const slides = document.getElementsByClassName("carouselTwo-slides");

//let viewportWidth = window.innerWidth;
let viewportWidth;

//slider count
let slidesHidden = 0;

const getWidth = () => {
    viewportWidth = window.innerWidth;
}


nextButton.addEventListener("click", ()=> {
    console.log("success");
    if (slidesHidden < 5) {
        for (let i = 0; i < 2; i++) {
            slides[slidesHidden].classList.add = `hideSlide`;
            slidesHidden += 1;
        }
        slides[slidesHidden].className += " animate__animated animate__slideInRight";
        slides[slidesHidden+1].className += " animate__animated animate__slideInRight";


    }

});

prevButton.addEventListener("click", ()=> {
    if (slidesHidden > 0) {
        for (let i = 0; i < 2; i++) {
            slides[slidesHidden].style.display = "none";
            slidesHidden += 1;
        }
        slides[slidesHidden].className += " animate__animated animate__slideInRight";
        slides[slidesHidden+1].className += " animate__animated animate__slideInRight";


    }
});