const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
document.addEventListener('keydown', keyPush);
setInterval(game, 1000 / 10);

var xVector = yVector = 0;
var positionX = positionY = 10;
var gameSize = tileCount = 20;
var eatPostionX = Math.floor(Math.random() * 19);
var eatPostionY = Math.floor(Math.random() * 19);
var trail = [];
var tail = 2;
var score = 0;

function game(){
  positionX += xVector;
  positionY += yVector;
  if(positionX < 0){
    positionX = tileCount - 1;
  }
  if(positionX > tileCount - 1){
    positionX = 0;
  }
  if(positionY < 0){
    positionY = tileCount - 1;
  }
  if(positionY > tileCount - 1){
    positionY = 0;
  }
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = 'lime';
  for(let i = 0; i < trail.length; i++){
    ctx.fillRect(trail[i].x * gameSize, trail[i].y * gameSize, gameSize - 2, gameSize - 2);
    if(trail[i].x == positionX && trail[i].y == positionY){
      tail = 2;
    }
  }

  trail.push({
    x : positionX,
    y : positionY
  });

  while(trail.length > tail){
    trail.shift();
  }

  if(eatPostionX == positionX && eatPostionY == positionY){
    tail++;
    eatPostionX = Math.floor(Math.random() * tileCount);
    eatPostionY = Math.floor(Math.random() * tileCount);
  }

  ctx.fillStyle = 'red';
  ctx.fillRect(eatPostionX * gameSize, eatPostionY * gameSize, gameSize - 2, gameSize - 2);

}

function keyPush(event){
  switch(event.keyCode) {
    case 37:
      xVector = -1;
      yVector = 0;
      break;
    case 38:
      xVector = 0;
      yVector = -1;
      break;
    case 39:
      xVector = 1;
      yVector = 0;
      break;
    case 40:
      xVector = 0;
      yVector = 1;
      break;
  }

}
