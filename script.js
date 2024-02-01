let a = new Date();
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
document.getElementById("Hours").innerHTML = h;
document.getElementById("Minutes").innerHTML = m;
document.getElementById("Second").innerHTML = s;
window.setTimeout( function() {
    window.location.reload();
  }, 1000);