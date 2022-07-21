
// DOM elements

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector (".prev");
const slides = document.getElementsByClassName("carouselTwo-slides");
const anchor = document.querySelector("#anchor");


// Create a condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 768px)')

let mobileScreen = true;

function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    mobileScreen = false;
  }
}
// Register event listener
mediaQuery.addListener(handleTabletChange)

// Initial check
handleTabletChange(mediaQuery)

let marginLeft = 0;
let speed;
let maxMargin;

//Settings for desktop
if (mobileScreen == false){
    speed = 50;
    maxMargin = 1800;
} else if (mobileScreen == true) {
    speed = 25;
    maxMargin = 2100;
}

//Next Function
const nextMovement = () => {
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
}

//Previous Function
const prevMovement = () => {
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
}


nextButton.addEventListener("click", ()=> {

        nextMovement();
        console.log(mobileScreen);


});

prevButton.addEventListener("click", ()=> {

    prevMovement();
        
});



$(document).on("pagecreate","#page_one",function(){
    $("#carouselTwo").on("swipeleft",function(){
        nextMovement();
    });
    $("#carouselTwo").on("swiperight",function(){
        prevMovement();
    });
});