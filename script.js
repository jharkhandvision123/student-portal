/* ==========================
   JHARKHANDVISION123 EDUCATION
   HOME PAGE SCRIPT
========================== */

const banners = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg"
];

let currentBanner = 0;

const slider = document.getElementById("slider");

function changeBanner() {

    currentBanner++;

    if (currentBanner >= banners.length) {
        currentBanner = 0;
    }

    slider.src = banners[currentBanner];

}

// Change banner every 3 seconds
setInterval(changeBanner, 3000);


// ==========================
// Button Click Animation
// ==========================

const boxes = document.querySelectorAll(".box");

boxes.forEach(function(box){

    box.addEventListener("click",function(){

        box.style.transform="scale(0.95)";

        setTimeout(function(){

            box.style.transform="";

        },150);

    });

});


// ==========================
// Smooth Scroll
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior: 'smooth'

            });

        }

    });

});
function searchCards(){

let input=document.getElementById("searchBox").value.toLowerCase();

let cards=document.querySelectorAll(".box");

cards.forEach(function(card){

let text=card.innerText.toLowerCase();

if(text.indexOf(input)>-1){

card.style.display="block";

}else{

card.style.display="none";

}

});

}
