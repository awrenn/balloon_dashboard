var times = [ 1 ];

function core_loop() {
  update_time_graph();
  setTimeout(function() {
    console.log("looping");
    core_loop()
  }, 1000);
}

function update_time_graph() {
  m = times[times.length - 1] + 1;
  times.push(m);
  times = chop(times, 5);
  var data = {labels : times, series : [ times ]};
  var options = {width : 300, height : 200};
  var responsiveOptions = [
    [
      'screen and (min-width: 641px) and (max-width: 1024px)', {
        showPoint : false,
        axisX : {
          labelInterpolationFnc : function(value) {
            // Will return Mon, Tue, Wed etc. on medium screens
            return value.slice(0, 3);
          }
        }
      }
    ],
    [
      'screen and (max-width: 640px)', {
        showLine : false,
        axisX : {
          labelInterpolationFnc : function(value) {
            // Will return M, T, W etc. on small screens
            return value[0];
          }
        }
      }
    ]
  ];
  new Chartist.Line('#time_chart', data, options, respondsiveOptions);
}

function chop(arr, c) {
  if (arr.length <= c) {
    return arr;
  };
  arr = arr.slice(arr.length - c, arr.length);
  return arr;
}

core_loop()
