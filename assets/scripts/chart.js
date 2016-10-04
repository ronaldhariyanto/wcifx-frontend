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