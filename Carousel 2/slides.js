
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
            slides[slidesHidden].classList.add("hideSlide");
            slides[slidesHidden].classList.remove("animate__slideInRight");
            slidesHidden += 1;
        }

        slides[slidesHidden].classList.add("animate__animated", "animate__slideInRight");
        slides[slidesHidden+1].classList.add("animate__animated", "animate__slideInRight");
        //slides[slidesHidden+2].classList.add("animate__animated", "animate__slideInRight");

    }

});

prevButton.addEventListener("click", ()=> {
    if (slidesHidden > 1) {
        for (let i = 0; i < 2; i++) {
            slides[slidesHidden].classList.add("animate__slideInLeft");
            slides[slidesHidden-1].classList.remove("animate__slideInLeft");
            slides[slidesHidden].classList.remove("hideSlide");
            
            slidesHidden -= 1;
        }


    }
});