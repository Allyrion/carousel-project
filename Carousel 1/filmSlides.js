// DOM elements

const filmOneLinks = document.querySelectorAll(".film1-link");
const filmTwoLinks = document.querySelectorAll(".film2-link");
const imageGrid = document.querySelector(".image-grid");
const film1_img = document.querySelector("#filmOneImg");
const film2_img = document.querySelector("#filmTwoImg");



const filmTwoFocus = () => {
    imageGrid.style.marginLeft = "-45%";
    film1_img.style.height = "500px";
    film2_img.style.height = "600px"
}

const filmOneFocus = () => {
    imageGrid.style.marginLeft = "20%";
    film1_img.style.height = "600px";
    film2_img.style.height = "500px"
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

