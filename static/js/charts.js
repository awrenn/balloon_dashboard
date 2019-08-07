var data = {
  labels : [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ],
  series : [ [ 5, 2, 4, 2, 0 ] ]
};

var options = {width : 300, height : 200};

new Chartist.Line('.ct-chart', data, options);
