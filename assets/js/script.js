let card = document.querySelectorAll(".feedback__card");
let contentBox = document.querySelectorAll(".contentBox");

for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("mouseover", function () {
        for (let i = 0; i < contentBox.length; i++) {
            contentBox[i].className = "contentBox";
        }
        document.getElementById(this.dataset.id).className = "contentBox active";

        for (let i = 0; i < card.length; i++) {
            card[i].className = "feedback__card";
        }
        this.className = "feedback__card active";
    });
}

document.querySelector(".header__burger").onclick = function(){
    document.querySelector(".header__menu").classList.contains("active") ?
    document.querySelector(".header__menu").classList.remove("active") :
    document.querySelector(".header__menu").classList.add("active");
};