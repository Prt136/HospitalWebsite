// Nav-bar is-active js
jQuery(document).ready(function($) {
  $(".nav-item").on('click', function () {
  $(".nav-item").removeClass("is-active");
  $(this).addClass("is-active");
})
});

// card-paragraph-set-in-1line
$(document).ready(function(){
 var maxHeight = 0;
        $('.card-box .des .box1').each(function () {
            var imgHeight = $(this).height();
            if (imgHeight > maxHeight) {
                maxHeight = imgHeight;
            }
        });
        $('.card-box .des .box1').height(maxHeight);
})

// Orthopedic Departments visibility of the card on button click:
document.addEventListener('DOMContentLoaded', function () {
  var showCardBtn = document.getElementById('showCardBtn');
  var card = document.getElementById('card');
  showCardBtn.addEventListener('click', function () {
  // Toggle the visibility of the card
  if (card.style.display === 'none' || card.style.display === '') {
    card.style.display = 'block';
  } else{
        card.style.display = 'none';
    }
  });
});

// Owl Carousel initialization:
// $(document).ready(function () {
//   $('.owl-carousel').owlCarousel({
//     items: 3, // Set the number of items to show in the carousel
//     loop: true,
//     dots:
//     margin: 20,
//     responsive: {
//       0:{
//           items: 1,
//       },
//       600:{
//           items: 2,
//       },
//       1000: {
//           items: 3,
//       },
//     },
//   });
// });
