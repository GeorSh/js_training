function swapColor(){
  var tmp = document.getElementById('txt').value;
  var bg = document.getElementById('block');
  bg.style.backgroundColor = tmp;
}
document.getElementById("btn").onclick = swapColor;
  