$(document).ready(function () {
    // time using momentJs
    var $timesDigit = $(".times-digit");
  
    window.setInterval(function () {
      var timeObject = moment().toObject();
      var timeStr = "";
  
      timeObject.hours =
        timeObject.hours > 9 ? timeObject.hours : "0" + timeObject.hours;
      timeObject.minutes =
        timeObject.minutes > 9 ? timeObject.minutes : "0" + timeObject.minutes;
      timeObject.seconds =
        timeObject.seconds > 9 ? timeObject.seconds : "0" + timeObject.seconds;
  
      str = timeObject.hours + "" + timeObject.minutes + "" + timeObject.seconds;
      str = str.split("");
      var i = 0;
  
      $(".times-digit .digit").each(function (e) {
        $(this).attr("class", "digit digit-" + str[i]);
        i++;
      });
    }, 1000);
  
    // Random digits
    window.setInterval(function () {
      $(".digits-go-random .digit").each(function (e) {
        var randomDig = getRandomInt(0, 9);
        $(this).attr("class", "digit digit-" + randomDig);
      });
    }, 500);
  
    // Changing styles
    $(".inputStyle").on("keyup", function () {
      var inputStyleVal = $(this).val();
      var _style = `.digit-1 .line-2, .digit-1 .line-3, .digit-1 .line-5, .digit-1 .line-1, .digit-1 .line-6, .digit-2 .line-3, .digit-2 .line-7, .digit-3 .line-3, .digit-3 .line-6, .digit-4 .line-1, .digit-4 .line-2, .digit-4 .line-6, .digit-5 .line-4, .digit-5 .line-6, .digit-6 .line-4, .digit-7 .line-2, .digit-7 .line-3, .digit-7 .line-5, .digit-7 .line-6, .digit-9 .line-2, .digit-9 .line-6, .digit-0 .line-5 {
    ${inputStyleVal}  
  }`;
      $("#newTransformStyle").html(_style);
    });
  });
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  