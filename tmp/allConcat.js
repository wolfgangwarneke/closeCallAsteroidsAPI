var Asteroid = require('./../js/asteroid.js').asteroidModule;
var Draw = require('./../js/draw.js').drawModule;


$(document).ready(function() {
  var currentasteroidObject = new Asteroid();
  var newDraw = new Draw();
  newDraw.createEarth();
  $('#asteroid').click(function() {
    var year = parseInt($("#year").val());
    var month = parseInt($("#month").val());
    var day = parseInt($("#day").val());
    currentasteroidObject.getAsteroid(year,month,day);
  });
  $('#drawAsteroids').click(function() {
    currentasteroidObject.asteroidsInstances.forEach(function(simpleAsteroid) {
      var arrayDiameterXY = newDraw.createAsteroid(simpleAsteroid.miss_distance, simpleAsteroid.estimated_diameter_meters_max);
      simpleAsteroid.canvasDiameter = arrayDiameterXY[0]
      simpleAsteroid.xPos = arrayDiameterXY[1];
      simpleAsteroid.yPos = arrayDiameterXY[2];
      console.log(simpleAsteroid);
    });
  });
  newDraw.cursorInit();
  $('#cosmos').click(function() {
    var currentX = $('#cosmos').attr('data-clicked-x-pos');
    var currentY = $('#cosmos').attr('data-clicked-y-pos');
    var hitFlag = false;
    newDraw.checkIfClickIsWithinEarth(currentX, currentY);
    currentasteroidObject.asteroidsInstances.forEach(function(simpleAsteroid) {
      if (newDraw.checkIfClickIsWithinAsteroid(currentX, currentY, simpleAsteroid.xPos, simpleAsteroid.yPos, simpleAsteroid.canvasDiameter*2)) {
        htmlOutput = "<ul>";
        htmlOutput = "<li>Miss distance: " + simpleAsteroid.miss_distance + "km</li>";
        $('#asteroidDisplay').html(htmlOutput);
        hitFlag = true;
      }
      if (!hitFlag) {
        $('#asteroidDisplay').html("<p>UR not clicking an asteroid :(</p>");
      }
    });
  });

});

var Constructor = require('./../js/other-template.js').constructorModule;


$(document).ready(function() {
  $('#generic-form').submit(function(event) {
    event.preventDefault();

  });
});

var Constructor = require('./../js/template.js').constructorModule;


$(document).ready(function() {
  $('#generic-form').submit(function(event) {
    event.preventDefault();

  });
});

var Clock = require('./../js/time.js').clockModule;

$(document).ready(function(){
  var myclock = new Clock();
  setInterval(myclock.update, 1000);
  $('#alarm-form').submit(function(event) {
    event.preventDefault();
    var alarmInput = $('#alarm-input').val();
    $('#clock').append('<h3>Alarm set for <strong>' + alarmInput + '</strong></h3>');
    setInterval(function() {
      myclock.update();
      myclock.alarmClock(alarmInput);
    }, 1000);
  });
});

exports.clockModule = Clock;
