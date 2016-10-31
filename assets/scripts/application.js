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
$('.parallax-window--trading-platforms').parallax({ imageSrc: 'images/bg-trading-06.jpg' });
$('.parallax-window--investment-01').parallax({ imageSrc: 'images/bg-investment.jpg' });
$('.parallax-window--investment-02').parallax({ imageSrc: 'images/bg-investment-03.jpg' });

$('.trading-appstore--andro').parallax({ imageSrc: 'images/bg-trading-android.jpg', naturalWidth: 1440 });
$('.trading-appstore--ios').parallax({ imageSrc: 'images/bg-trading-ios.jpg', naturalWidth: 1440 });

$('.our-services--homepage').parallax({
  imageSrc: 'images/slide-home-bg2.jpg',
  naturalWidth: 1440
});

// For adding active class on main navigation
$(function(){
  var url = window.location.pathname,
    urlRegExp = new RegExp(url.replace(/\/$/,'') + "$");
    $('.navbar-nav a').each(function(){
      if(urlRegExp.test(this.href.replace(/\/$/,''))){
        $(this).parent().addClass('active');
        if($(this).parent('.dropdown-menu')) {
          $(this).parents('.dropdown').addClass('active');
        }
      }
    });
});

$(document).ready(function() {

  $('.dropdown').hover(
    function() {
      $('.dropdown-menu', this).stop( true, true ).fadeIn('fast');
      $(this).toggleClass('active');
      $('.caret', this).removeClass('caret').addClass('caret-up');
    },
    function() {
      $('.dropdown-menu', this).stop( true, true ).fadeOut('fast');
      $(this).toggleClass('active');
      $('.caret-up', this).removeClass('caret-up').addClass('caret');
    }
  );

  $('.select2').select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: "select2-result-orange"
  });

  $('.select2-lang').select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: "select2-result-lang"
  });

  $('.select2-month').select2({
    minimumResultsForSearch: Infinity,
    dropdownCssClass: "select2-result-grey"
  });

  $('.select2-day').select2({
    minimumResultsForSearch: Infinity,
    placeholder: "Days"
  });

  $('.select2-year').select2({
    minimumResultsForSearch: Infinity,
    placeholder: "Year"
  });

  $('.select2-country').select2({
    minimumResultsForSearch: Infinity,
    placeholder: "Country"
  });

  $('.select2-city').select2({
    minimumResultsForSearch: Infinity,
    placeholder: "City"
  });

  $('.slider-homepage').slick();

  $('.slider-homepage').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('.slider-nav--action li a').removeClass('active');
    $('.slider-nav--action li a').eq(parseInt(nextSlide)).addClass('active');
  });

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
    if($(this).attr('data-click-state') === 1) {
      $(this).attr('data-click-state', 0);
      $(this).siblings('#pwd-login').attr('type','password');
    } else {
      $(this).attr('data-click-state', 1);
      $(this).siblings('#pwd-login').attr('type','text');
    }
  });

});
