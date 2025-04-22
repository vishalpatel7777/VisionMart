const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
let index = 0;
const totalItems = carouselItems.length;

// Function to update the carousel position
function showSlide() {
    index++;
    if (index >= totalItems) {
        index = 0; // Reset index to first slide after the last one
    }
    carousel.style.transform = `translateX(${-index * 100}%)`; // Slide to the next item
}

// Auto slide every 4 seconds (4000ms)
setInterval(showSlide, 4000);

