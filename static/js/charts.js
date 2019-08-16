const MAX_LIST_SIZE = 10;

function core_loop(times, loops) {
  update_time_chart(times);
  update_height_chart(times);

  m = times[times.length - 1] + 1;
  times.push(m)
  times = chop(times, MAX_LIST_SIZE);
  loops += 1

  setTimeout(function() { core_loop(times, loops) }, 1000);
}

function hc_loop() {
  update_hit_counter();
  setTimeout(function() { hc_loop() }, 300)
}

function update_time_chart(times) {
  var data = {labels : times, series : [ times ]};
  var options = {width : 300, height : 300};
  new Chartist.Line('#time_chart', data, options);
}

var heights = [ 1 ];
function update_height_chart(times) {
  heights.push(Math.pow(times[times.length - 1], 2));
  heights = chop(heights, MAX_LIST_SIZE);
  var data = {labels : times, series : [ heights ]};
  var options = {width : 300, height : 300};
  new Chartist.Line('#height_chart', data, options);
}

function update_hit_counter() {
  let hc = $("#hit_counter");
  hc.empty();
  var r = Math.floor(Math.random() * 1000000)
  let text_repr = `<table><tbody><tr>`
  for (i = 0; i < 5; i++) {
    let n = Math.floor(r / 100000);
    var r = r - n * 100000;
    var r = r * 10;
    text_repr += `<td class="count-digit">${n}</td>`;
  }
  text_repr += `</tr></tbody></table>`
  hc.append(text_repr);
}

function chop(arr, c) {
  if (arr.length <= c) {
    return arr;
  };
  arr = arr.slice(arr.length - c, arr.length);
  return arr;
}

core_loop([ 1 ], 0);
hc_loop();
