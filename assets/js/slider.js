// Simple slider logic for .mockup-slider
// Add this file to your Hugo assets and include it in your theme

// Simple slider logic for .mockup-slider
// Add this file to your Hugo assets and include it in your theme

document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.mockup-slider');
  if (!slider) return;
  const images = slider.querySelectorAll('img');
  let current = 0;
  images.forEach((img, i) => img.style.display = i === 0 ? 'block' : 'none');
  slider.querySelector('.prev').onclick = () => {
    images[current].style.display = 'none';
    current = (current - 1 + images.length) % images.length;
    images[current].style.display = 'block';
  };
  slider.querySelector('.next').onclick = () => {
    images[current].style.display = 'none';
    current = (current + 1) % images.length;
    images[current].style.display = 'block';
  };
});