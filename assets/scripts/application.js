'use strict';

$('.parallax-window--diary').parallax({ imageSrc: 'images/bg-parrallax-01.jpg' });

$('.parallax-window--news').parallax({ imageSrc: 'images/bg-news.jpg' });

$('.parallax-window--about').parallax({ imageSrc: 'images/bg-about.jpg' });

$('.parallax-window--contest').parallax({ imageSrc: 'images/bg-contest.jpg' });

$('.parallax-contest').parallax({ imageSrc: 'images/bg-contest-03.jpg' });

$('.parallax-window--businnes').parallax({ imageSrc: 'images/bg-about-02.jpg' });

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

// http://gionkunz.github.io/chartist-js/api-documentation.html

var data = {
  labels: ['1977', '1987', '1992', '1997', '2000', '2006', '2010', '2015'],
  series: [
    [
      10, 15, 20, 25, 27, 25, 23, 25
    ],
    [2, 3, 5, 5, 10, 12, 15, 17]
  ]
};

var options = {
  seriesBarDistance: 21,
  height: 580,
  axisY: {
    type: Chartist.FixedScaleAxis,
    low: 0,
    high: 30,
    ticks: [0, 5, 10, 15, 20, 25, 30],
    labelInterpolationFnc: function(value) {
      return Math.floor(value);
    }
  }
};

var responsiveOptions = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 15,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];

new Chartist.Bar('.ct-chart', data, options, responsiveOptions);
