
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

        for (let i = 0; i < slides.length; i++) {
            if (slides[i].classList.contains("animate__slideInRight") == true) {
            slides[i].classList.remove("animate__slideInRight");
            }
            if (slides[i].classList.contains("animate__slideInLeft") == true) {
                slides[i].classList.remove("animate__slideInLeft");
            }

        }

        for (let i = 0; i < 2; i++) {

            slides[slidesHidden].classList.add("hideSlide");
            slides[slidesHidden].classList.remove("animate__slideInRight");
            slidesHidden += 1;

        }

        slides[slidesHidden].classList.add("animate__animated", "animate__slideInRight");
        slides[slidesHidden+1].classList.add("animate__animated", "animate__slideInRight");

        if (slides[slidesHidden+2] !== undefined) {
            slides[slidesHidden+2].classList.add("animate__animated", "animate__slideInRight");
            slides[slidesHidden+2].classList.add("hideSlide");
        }

        slides[slidesHidden].classList.add("hideSlide");
        slides[slidesHidden+1].classList.add("hideSlide");
  

        const resetDisplayNext = setTimeout(() => {
            slides[slidesHidden].classList.remove("hideSlide");
            slides[slidesHidden+1].classList.remove("hideSlide");
            if (slides[slidesHidden+2] !== undefined) {
                slides[slidesHidden+2].classList.remove("hideSlide");
            }
        }, 1);

    }

});

prevButton.addEventListener("click", ()=> {
    if (slidesHidden >= 0) {
        for (let i = 0; i < 2; i++) {
            
            slides[slidesHidden].classList.add("animate__slideInLeft");
            if (slides[slidesHidden+2] !== undefined){
                slides[slidesHidden+2].classList.remove("animate__slideInLeft");
            }
            
            slides[slidesHidden].classList.remove("hideSlide");

            /* const resetDisplayPrev = setTimeout(() => {
                slides[slidesHidden].classList.add("animate__slideInLeft");
                slides[slidesHidden].classList.remove("hideSlide");
            }, 1); */
            
            if (slidesHidden !== 0) {
                slidesHidden -= 1;
            }

        }


    }
});