document.addEventListener('DOMContentLoaded', function () {
    const sliderInner = document.querySelector('.slider--inner');
    const images = sliderInner.querySelectorAll('.img_box');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function updateSliderPosition() {
        const offset = -currentIndex * 100; // Mover el slider en función del índice
        sliderInner.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateSliderPosition();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateSliderPosition();
    });

    // Inicializa mostrando la primera imagen
    updateSliderPosition();
});
