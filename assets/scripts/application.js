'use strict';

$('.parallax-window--diary').parallax({ imageSrc: 'images/bg-parrallax-01.jpg' });
$('.parallax-window--news').parallax({ imageSrc: 'images/bg-news.jpg' });
$('.parallax-window--about').parallax({ imageSrc: 'images/bg-about.jpg' });
$('.parallax-window--contest').parallax({ imageSrc: 'images/bg-contest.jpg' });
$('.parallax-contest').parallax({ imageSrc: 'images/bg-contest-03.jpg' });
$('.parallax-window--businnes').parallax({ imageSrc: 'images/bg-about-02.jpg' });
$('.parallax-window--partnership').parallax({ imageSrc: 'images/bg-partnership.jpg' });
$('.parallax-window--trading-demo').parallax({ imageSrc: 'images/bg-trading-01.jpg' });
$('.parallax-window--trading-real').parallax({ imageSrc: 'images/bg-trading-02.jpg' });
$('.parallax-window--trading-instrument').parallax({ imageSrc: 'images/bg-trading-03.jpg' });
$('.parallax-window--trading-payment').parallax({ imageSrc: 'images/bg-trading-04.jpg' });
$('.parallax-window--trading-platforms').parallax({ imageSrc: 'images/bg-trading-05.jpg' });
$('.parallax-window--investment-01').parallax({ imageSrc: 'images/bg-investment.jpg' });
$('.parallax-window--investment-02').parallax({ imageSrc: 'images/bg-investment-03.jpg' });

$('.our-services--homepage').parallax({
  imageSrc: 'images/slide-home-bg2.jpg',
  naturalWidth: '1440px'
});

$(document).ready(function() {

  $('.dropdown').hover(            
    function() {
      $('.dropdown-menu', this).stop( true, true ).fadeIn('fast');
      $(this).toggleClass('active');
      $('span', this).toggleClass('caret caret-up');                
    },
    function() {
      $('.dropdown-menu', this).stop( true, true ).fadeOut('fast');
      $(this).toggleClass('active');
      $('span', this).toggleClass('caret caret-up');                
    }
  );

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

  $('.glyphicon-eye-open').on('click', function(){
    if($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0);
      $(this).siblings('#pwd-login').attr('type','password');
    } else {
      $(this).attr('data-click-state', 1);
      $(this).siblings('#pwd-login').attr('type','text');
    }
  });

});
