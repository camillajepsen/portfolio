let slideIndex = 0;
let slideInterval;
let isPlaying = true;

function showSlides() {
    let slides = document.getElementsByClassName("slide-images");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    slides[slideIndex - 1].style.display = "block";

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    dots[slideIndex - 1].classList.add("active");
}

function startSlideshow() {
    slideInterval = setInterval(showSlides, 3000); 
}

function stopSlideshow() {
    clearInterval(slideInterval);
}

function toggleSlideshow() {
    let buttonImg = document.getElementById("pauseBtnImg");

    if (isPlaying) {
        stopSlideshow();
        buttonImg.src = "/images/play.png";
    } else {
        startSlideshow();
        buttonImg.src = "/images/pause.png";
    }

    isPlaying = !isPlaying;
}

// Start the slideshow when the page loads
document.addEventListener("DOMContentLoaded", function() {
    showSlides();
    startSlideshow();
});
