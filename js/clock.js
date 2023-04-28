var clockH = document.querySelector(".hours");
var clockM = document.querySelector(".minutes");
var clockS = document.querySelector(".seconds");

function time() {     
  var d = new Date(),
      s = d.getSeconds() * 6,
      m = d.getMinutes() * 6,
      h = d.getHours() % 12 / 12 * 360;  
      clockH.style.transform = "rotate(" + h + "deg)";
      clockM.style.transform = "rotate(" + m + "deg)";
      clockS.style.transform = "rotate(" + s + "deg)";
}
var clock = setInterval(time, 1000);