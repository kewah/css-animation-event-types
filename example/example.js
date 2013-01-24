var cssAnimEventTypes = require('css-animation-event-types');

document.addEventListener('DOMContentLoaded', function() {
  var status = document.getElementById('status');
  var el = document.getElementById('anim');
  var iterationNum = 0;

  el.addEventListener(cssAnimEventTypes.start, function() {
    status.innerHTML = 'start';
  }, false);

  el.addEventListener(cssAnimEventTypes.iteration, function() {
    iterationNum += 1;
    status.innerHTML = 'iteration ' + iterationNum;
  }, false);

  el.addEventListener(cssAnimEventTypes.end, function() {
    status.innerHTML = 'end';
  }, false);
}, false)