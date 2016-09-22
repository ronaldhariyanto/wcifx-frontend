$('.slider-homepage').slick();

$('.slider-services').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1
});

$('.news-slider').slick();

$('#scene').parallax();

$(document).ready(function() {
  $('.select2').select2({
    minimumResultsForSearch: Infinity
  });

  $('.diary-news').masonry({
    itemSelector: '.news--items',
    columnWidth: 310
  });
});