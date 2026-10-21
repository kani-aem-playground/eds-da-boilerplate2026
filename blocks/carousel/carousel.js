(function () {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    const track = carousel.querySelector('.carousel__track');
    const slides = Array.from(track ? track.children : []);
    const prevButton = carousel.querySelector('[data-carousel-prev]');
    const nextButton = carousel.querySelector('[data-carousel-next]');

    if (!track || slides.length === 0) {
      return;
    }

    let currentIndex = 0;

    const updateCarousel = () => {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    prevButton?.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    });

    nextButton?.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
    });

    updateCarousel();
  });
})();
