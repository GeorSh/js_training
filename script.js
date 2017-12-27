function swapColor(){
  let tmp = document.getElementById('txt').value;
  let bg = document.getElementById('block');
  bg.style.backgroundColor = tmp;
}
document.getElementById("btn").onclick = swapColor;
  