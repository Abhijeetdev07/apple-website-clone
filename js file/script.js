document.addEventListener('DOMContentLoaded', () => {
    const cardSliders = document.querySelectorAll('.card_slider_container');

  cardSliders.forEach((slider) => {
      const leftBtn = slider.querySelector('.left-btn');
      const rightBtn = slider.querySelector('.right-btn');
      const scrollContent = slider.querySelector('.cards');
      
      leftBtn.addEventListener('click', () => {
          scrollContent.scrollBy({ left: -300, behavior: 'smooth' });
      });
      
      rightBtn.addEventListener('click', () => {
          scrollContent.scrollBy({ left: 300, behavior: 'smooth' });
      });
  });
});