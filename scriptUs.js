const slides = document.querySelectorAll('.slideUs');
let currentSlide = 0;
const slideInterval = 3000; // Интервал между слайдами (в миллисекундах)

function nextSlide() {
    slides[currentSlide].classList.remove('active-slideUs');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active-slideUs');
}

setInterval(nextSlide, slideInterval);
