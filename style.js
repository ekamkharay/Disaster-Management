// Floating News Slider
let slider = document.getElementById('news-slider');
let slides = slider.children;
let index = 0;

function showNextSlide() {
    slides[index].style.display = 'none'; // Hide current slide
    index = (index + 1) % slides.length;  // Move to the next slide
    slides[index].style.display = 'block'; // Show the next slide
}

// Initialize slider: Show only the first slide
for (let i = 1; i < slides.length; i++) {
    slides[i].style.display = 'none';
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);
