var mySwiper = new Swiper('.swiper-container', {
	direction: 'horizontal', // Set the direction of the carousel
	loop: true, // Set to true if you want the carousel to loop continuously
	effect: 'flip', // Set the transition effect to 'flip'
	grabCursor: true, // Set to true if you want the cursor to change to a hand when hovering over the carousel
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true, // Set to true if you want to be able to click on the pagination bullets to navigate
	},
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  });