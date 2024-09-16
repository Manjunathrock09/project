let currentSlide = 0;
    
        function moveSlide(direction) {
            const slide = document.querySelector('.carousel-slide');
            const totalSlides = slide.children.length / 4; // 4 items per slide
    
            currentSlide += direction;
    
            if (currentSlide < 0) {
                currentSlide = totalSlides - 1;
            } else if (currentSlide >= totalSlides) {
                currentSlide = 0;
            }
    
            slide.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

     const slides = document.querySelector('.slides');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    let index = 0;

    function showSlide(index) {
        slides.style.transform = `translateX(${-index * 50}%)`; // 50% for each item
    }

    prev.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : slides.children.length - 1;
        showSlide(index);
    });

    next.addEventListener('click', () => {
        index = (index < slides.children.length - 1) ? index + 1 : 0;
        showSlide(index);
    });

    let currentIndex = 0;

    function moveCarousel(direction) {
        const carouselTrack = document.querySelector('.carousel-track');
        const totalItems = carouselTrack.children.length;
        const itemsPerView = 4; 
        const totalSlides = Math.ceil(totalItems / itemsPerView);

        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    let uniqueActiveSlideIndex = 0;

    function uniqueNavigateSlide(direction) {
        const uniqueSlideWrapper = document.querySelector('.unique-carousel-track');
        const uniqueAllSlides = document.querySelectorAll('.unique-slide');
        const uniqueTotalSlidesCount = uniqueAllSlides.length;

        uniqueActiveSlideIndex += direction;

        if (uniqueActiveSlideIndex < 0) {
            uniqueActiveSlideIndex = uniqueTotalSlidesCount - 1;
        } else if (uniqueActiveSlideIndex >= uniqueTotalSlidesCount) {
            uniqueActiveSlideIndex = 0;
        }
         uniqueSlideWrapper.style.transform = `translateX(-${uniqueActiveSlideIndex * 100}%)`;
    }

        const mobileMenu = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.class2');

        // Toggle the visibility of the navigation links on mobile
        mobileMenu.addEventListener('click', () => {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });