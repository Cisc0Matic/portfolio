document.addEventListener('DOMContentLoaded', function () {
    // Configuración de los carruseles
    const carousels = [
        { id: 'carouselExampleIndicators1', currentIndex: 0 },
        { id: 'carouselExampleIndicators2', currentIndex: 0 }
    ];

    carousels.forEach((carousel) => {
        const carouselElement = document.getElementById(carousel.id);
        const sliderInner = carouselElement.querySelector('.carousel-inner');
        const items = sliderInner.querySelectorAll('.carousel-item');
        const prevButton = carouselElement.querySelector('.carousel-control-prev');
        const nextButton = carouselElement.querySelector('.carousel-control-next');

        // Actualiza la posición del carrusel
        function updateCarouselPosition() {
            items.forEach((item, index) => {
                if (index === carousel.currentIndex) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }

        // Evento para la flecha anterior
        prevButton.addEventListener('click', () => {
            carousel.currentIndex =
                (carousel.currentIndex > 0) ? carousel.currentIndex - 1 : items.length - 1;
            updateCarouselPosition();
        });

        // Evento para la flecha siguiente
        nextButton.addEventListener('click', () => {
            carousel.currentIndex =
                (carousel.currentIndex < items.length - 1) ? carousel.currentIndex + 1 : 0;
            updateCarouselPosition();
        });

        // Inicializa mostrando el primer slide
        updateCarouselPosition();
    });
});
