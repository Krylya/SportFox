const slider = document.querySelector(".about__slider");
const slideList = slider.children;
let currentSlide = 0;
slideList[currentSlide].classList.add('show');

const nextSlide = () => {
    slideList[currentSlide].classList.remove('show');
    currentSlide = (currentSlide + 1) % slideList.length;
    slideList[currentSlide].classList.add('show');
}

setInterval(nextSlide, 3000);

//slideInterval();
