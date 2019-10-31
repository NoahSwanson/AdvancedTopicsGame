var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var brickHeight = 10;
var brickWidth = 50;
var mouseX = 0;
var mouseY = 0;

document.addEventListener("mousemove", mouseMoveHandler, false);
document.addEventListener('mousedown', e => {
  placeBrick();
});

//purpose: deals with the moving mouse
//keeps mouseX and mouseY as the coordinates of the cursor
function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;

  var relativeY = e.clientY - canvas.offsetTop;
  if(relativeX > 0 && relativeX < canvas.width) {
    mouseX = relativeX;
  }
  if(relativeY > 0 && relativeY < canvas.height) {
    mouseY = relativeY;
  }
}

//purpose: draws the floating brick around the cursor
function drawStamp() {
  if (bricksLeft>0) {
    ctx.beginPath();
    ctx.rect(mouseX, mouseY, brickWidth, brickHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }
}

//purpose: draws the array of bricks (bricks[]) onto the canvas
function drawBricks() {
  ctx.beginPath();
  for (i=0; i<bricks.length; i++) {
    ctx.rect(bricks[i].x, bricks[i].y, brickWidth, brickHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
  }
  ctx.closePath();
}

//purpose: adds brick when mousepad is clicked
//subtracts one from number of bricks left to place
//pushes new brick onto brick[] array with coordinates at current mouse location
function placeBrick() {
  if (bricksLeft>0) {
    var point= {x:mouseX,y:mouseY};
    bricks.push(point);
    bricksLeft--;
  }
}