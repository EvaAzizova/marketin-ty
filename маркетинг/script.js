// script.js

document.addEventListener('DOMContentLoaded', () => {
    const circle = document.getElementById('expandable-circle');
    const nextSlideButton = document.getElementById('next-slide-button');
    const slide1 = document.querySelector('.slide-1');
    const slide2 = document.querySelector('.slide-2');
    const overlay = document.getElementById('overlay');
    
    nextSlideButton.addEventListener('click', () => {
        // Добавляем класс для анимации круга
        circle.classList.add('expanded');
        overlay.classList.add('active');
        
        // Переход к следующему слайду
        setTimeout(() => {
            slide1.style.opacity = '0';
            slide1.style.transform = 'translateX(-100%)';
            slide2.style.opacity = '1';
            slide2.style.transform = 'translateX(0)';
            overlay.classList.remove('active');
        }, 600); // Задержка на время анимации расширения круга
    });
});

