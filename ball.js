const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;

const circle = function(x, y, radius, fillCircle){
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  if (fillCircle){
    ctx.fill();
  } else {
    ctx.stroke();
  }
};

// Ball constructor  
var Ball = function(){
  this.x = width / 2;
  this.y = height / 2;
  this.speed = 5;
  this.xSpeed = this.speed;
  this.ySpeed = this.speed;
};

Ball.prototype.move = function(){
  this.x += this.xSpeed;
  this.y += this.ySpeed;
  if ((this.x - 15) < 0) {
    this.xSpeed = 5;
  } else if ((this.x + 15) > width) {
    this.xSpeed = -5;
  } else if ((this.y - 15) < 0) {
    this.ySpeed = 5;
  } else if ((this.y + 15) > height) {
    this.ySpeed = -5;
  } 
};

Ball.prototype.draw = function(){
  circle(this.x, this.y, 10, true);
};

Ball.prototype.setDerection = function(direction){
  if (direction === 'up') {
    this.xSpeed = 0;
    this.ySpeed = -(this.speed);
    console.log(direction);
    console.log(this.speed);
  } else if (direction === 'down') {
    this.xSpeed = 0;
    this.ySpeed = this.speed;
    console.log(direction);
    console.log(this.speed);
  } else if (direction === 'left') {
    this.xSpeed = -(this.speed);
    this.ySpeed = 0;
    console.log(direction);
    console.log(this.speed);
  } else if (direction === 'right') {
    this.xSpeed = this.speed;
    this.ySpeed = 0;
    console.log(direction);
    console.log(this.speed);
  } else if (direction === 'stop') {
    this.xSpeed = 0;
    this.ySpeed = 0;
  }
};

var ball = new Ball ();

const keyAction = {
  32: 'stop',
  37: 'left',
  38: 'up',
  39: 'right', 
  40: 'down',
};

const speeds = {
  49: 1,
  50: 2,
  51: 3,
  52: 4,
  53: 5,
  54: 6,
  55: 7,
  56: 8,
  57: 9,
};

$("body").keydown(function(event){
  const direction = keyAction[event.keyCode];
  const speed = speeds[event.keyCode];
  ball.setDerection(direction);
});

setInterval(function(){
  ctx.clearRect(0, 0, width, height);
  ball.draw();
  ball.move();
  ctx.strokeRect(0, 0, width, height);
}, 30);