var countDownDate = new Date("May 22, 2018 10:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  document.getElementById("days").innerHTML = days + " дней " + hours + " часов ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "Удачи!";
  }
}, 1000);
