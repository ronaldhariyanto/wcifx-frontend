$('.parallax-window').parallax({ imageSrc: 'images/bg-parrallax-01.jpg' });

$('.parallax-window--news').parallax({ imageSrc: 'images/bg-news.jpg' });

$('.our-services--homepage').parallax({
  imageSrc: 'images/slide-home-bg2.jpg',
  naturalWidth: '1440px'
});

$(document).ready(function() {
  $('.select2').select2({
    minimumResultsForSearch: Infinity
  });

  $('.slider-homepage').slick();

  $('.slider-nav--action li a').eq(0).addClass('active');

  $('.slider-nav--action li a').click(function(e) {
    e.preventDefault();
    $('.slider-nav--action li a').removeClass('active');
    var slideIndex = $('.slider-nav--action li a').index(this);
    $('.slider-nav--action li a').eq(parseInt(slideIndex)).addClass('active');
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

  $('.our-services-box').hover(function() {
    $(this).find('i').toggleClass('active');
  });

  $('.news-like__action').click(function() {
    $(this).toggleClass('active');
    $(this).find('i').toggleClass('fa-heart-o').toggleClass('fa-heart');
  });

});
