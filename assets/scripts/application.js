$('.parallax-window').parallax({imageSrc: 'images/bg-parrallax-01.jpg'});

$('.our-services--homepage').parallax({
  imageSrc: 'images/slide-home-bg2.jpg',
  naturalWidth: '1440px'
});

$(document).ready(function() {
  $('.select2').select2({
    minimumResultsForSearch: Infinity
  });

  $('.slider-homepage').slick();

  $('.slider-nav--action li a').click(function(e){
    e.preventDefault();
    var slideIndex = $('.slider-nav--action li a').index(this);
    $('.slider-homepage').slick('slickGoTo', parseInt(slideIndex));
  });

  $('.slider-services').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  $('.news-slider').slick();

  $('.diary-news').masonry({
    itemSelector: '.news--items',
    columnWidth: 310
  });
});