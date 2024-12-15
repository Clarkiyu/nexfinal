let currentSlide = 0; // Keep track of the current slide index

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel .img-container');
    const totalSlides = slides.length;

    // Update the currentSlide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the carousel by adjusting the transform property
    const carousel = document.querySelector('.carousel');
    const slideWidth = slides[0].offsetWidth;  // Get the width of a single image
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Optional: Automatic slide transition (every 5 seconds)
setInterval(() => {
    moveSlide(1);  // Automatically move to the next slide every 5 seconds
}, 5000);
