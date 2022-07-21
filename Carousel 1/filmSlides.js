// DOM elements

const filmOneLinks = document.querySelectorAll(".film1-link");
const filmTwoLinks = document.querySelectorAll(".film2-link");
const imageGrid = document.querySelector(".image-grid");
const film1_img = document.querySelector("#filmOneImg");
const film2_img = document.querySelector("#filmTwoImg");
const lines = document.querySelectorAll(".line")








const filmTwoFocus = () => {
    imageGrid.style.marginLeft = "-110%";
    film1_img.style.height = "500px";
    film2_img.style.height = "600px";
    lines[1].classList.add("active")
    lines[0].classList.remove("active")
}

const filmOneFocus = () => {
    imageGrid.style.paddingLeft = "55%";
    imageGrid.style.marginLeft = null;
    film1_img.style.height = "600px";
    film2_img.style.height = "500px";
    lines[0].classList.add("active")
    lines[1].classList.remove("active")
}

filmOneLinks[0].addEventListener("click", ()=> {
    filmOneFocus();
    
});

filmTwoLinks[0].addEventListener("click", ()=> {
    filmTwoFocus();
});

filmOneLinks[1].addEventListener("click", ()=> {
    filmOneFocus();
});

filmTwoLinks[1].addEventListener("click", ()=> {
    filmTwoFocus();
});

filmOneLinks[2].addEventListener("click", ()=> {
    filmOneFocus();
});

filmTwoLinks[2].addEventListener("click", ()=> {
    filmTwoFocus();
});




$(document).on("pagecreate","#page_one",function(){
    $(".image-grid").on("swipeleft",function(){
        filmTwoFocus();
    });
    $(".image-grid").on("swiperight",function(){
        filmOneFocus();
    });
});
