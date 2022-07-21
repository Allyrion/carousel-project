
// DOM elements

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector (".prev");
const slides = document.getElementsByClassName("carouselTwo-slides");
const anchor = document.querySelector("#anchor");

//let viewportWidth = window.innerWidth;
let viewportWidth;

//slider count
let slidePos = 1;

const getWidth = () => {
    viewportWidth = window.innerWidth;
}

let marginLeft = 0;
let speed = 50;
let maxMargin = 1800;

nextButton.addEventListener("click", ()=> {

        
        if (marginLeft < maxMargin) {
            const carouselNext = setInterval(()=>{
                anchor.style.marginLeft = `-${marginLeft+speed}px`;
                marginLeft = marginLeft + speed;
                console.log(marginLeft);
            }, 25)

            const stopNext = setTimeout(() => {
                clearInterval(carouselNext);
            }, 350)
        }


});

prevButton.addEventListener("click", ()=> {


        if (marginLeft > 0) {
            const carouselNext = setInterval(()=>{
                anchor.style.marginLeft = `-${marginLeft-speed}px`;
                marginLeft = marginLeft - speed;
                console.log(marginLeft);
            }, 25)

            const stopNext = setTimeout(() => {
                clearInterval(carouselNext);
            }, 350)
        }


});