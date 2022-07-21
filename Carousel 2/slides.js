
// DOM elements

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector (".prev");
const slides = document.getElementsByClassName("carouselTwo-slides");

//let viewportWidth = window.innerWidth;
let viewportWidth;

//slider count
let slidePos = 1;

const getWidth = () => {
    viewportWidth = window.innerWidth;
}


nextButton.addEventListener("click", ()=> {
    /* if (slidesHidden < 5) {

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
        }, 1); } */

        if (slidePos < 4) {

            // Cleans up animation
            for (let i = 0; i < slides.length; i++) {
                if (slides[i].classList.contains("animate__slideInRight") == true) {
                slides[i].classList.remove("animate__slideInRight");
                }
                if (slides[i].classList.contains("animate__slideInLeft") == true) {
                    slides[i].classList.remove("animate__slideInLeft");
                }
                slides[i].classList.add("hideSlide");
            }

            
            // Adds animation to appropriate slides and displays them at slight delay
            if (slidePos == 1) {
                slides[2].classList.add("animate__slideInRight");
                slides[3].classList.add("animate__slideInRight");
                slides[4].classList.add("animate__slideInRight");

                const displaySlides = setTimeout(() => {
                    slides[2].classList.remove("hideSlide");
                    slides[3].classList.remove("hideSlide")
                    slides[4].classList.remove("hideSlide")
                }, 10);

                slidePos += 1;


            } else if (slidePos == 2) {
                slides[4].classList.add("animate__slideInRight");
                slides[5].classList.add("animate__slideInRight");
                slides[6].classList.add("animate__slideInRight");

                const displaySlides = setTimeout(() => {
                    slides[4].classList.remove("hideSlide");
                    slides[5].classList.remove("hideSlide");
                    slides[6].classList.remove("hideSlide");
                }, 10);

                slidePos += 1;


            } else if (slidePos == 3) {
                slides[6].classList.add("animate__slideInRight");
                slides[7].classList.add("animate__slideInRight");

                const displaySlides = setTimeout(() => {
                    slides[6].classList.remove("hideSlide");
                    slides[7].classList.remove("hideSlide");
                }, 10);

                slidePos += 1;
            }

        }

});

prevButton.addEventListener("click", ()=> {
    /* if (slidesHidden >= 0) {
        for (let i = 0; i < 2; i++) {
            
            slides[slidesHidden].classList.add("animate__slideInLeft");
            if (slides[slidesHidden+2] !== undefined){
                slides[slidesHidden+2].classList.remove("animate__slideInLeft");
            }
            
            slides[slidesHidden].classList.remove("hideSlide");

            /* const resetDisplayPrev = setTimeout(() => {
                slides[slidesHidden].classList.add("animate__slideInLeft");
                slides[slidesHidden].classList.remove("hideSlide");
            }, 1); 
            
            if (slidesHidden !== 0) {
                slidesHidden -= 1;
            }

        }
     } */

        if (slidePos > 1) {

            // Cleans up animation
            for (let i = 0; i < slides.length; i++) {
                if (slides[i].classList.contains("animate__slideInRight") == true) {
                slides[i].classList.remove("animate__slideInRight");
                }
                if (slides[i].classList.contains("animate__slideInLeft") == true) {
                    slides[i].classList.remove("animate__slideInLeft");
                }
                slides[i].classList.add("hideSlide");
            }

            
            // Adds animation to appropriate slides and displays them at slight delay
            if (slidePos == 2) {
                slides[0].classList.add("animate__slideInLeft");
                slides[1].classList.add("animate__slideInLeft");
                slides[2].classList.add("animate__slideInLeft");

                const displaySlides = setTimeout(() => {
                    slides[0].classList.remove("hideSlide");
                    slides[1].classList.remove("hideSlide")
                    slides[2].classList.remove("hideSlide")
                }, 10);

                slidePos -= 1;


            } else if (slidePos == 3) {
                slides[2].classList.add("animate__slideInLeft");
                slides[3].classList.add("animate__slideInLeft");
                slides[4].classList.add("animate__slideInLeft");

                const displaySlides = setTimeout(() => {
                    slides[2].classList.remove("hideSlide");
                    slides[3].classList.remove("hideSlide")
                    slides[4].classList.remove("hideSlide")
                }, 10);

                slidePos -= 1;


            } else if (slidePos == 4) {
                slides[4].classList.add("animate__slideInLeft");
                slides[5].classList.add("animate__slideInLeft");
                slides[6].classList.add("animate__slideInLeft");

                const displaySlides = setTimeout(() => {
                    slides[4].classList.remove("hideSlide");
                    slides[5].classList.remove("hideSlide");
                    slides[6].classList.remove("hideSlide");
                }, 10);

                slidePos -= 1;
            }

        }


});