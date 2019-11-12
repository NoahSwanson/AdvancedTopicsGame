var canvas = document.getElementById("myCanvas");
canvas.style.cursor = "none";
var ctx = canvas.getContext("2d");
document.addEventListener("keydown", keyDownHandler, false);

//ball variables
var ballX=20+(Math.random()*(canvas.width-40));
// var ballX=canvas.width/2;
var ballRadius=10;
var ballY=canvas.height;
var ballStart=false;

//arrow variables
var angle = Math.random()*Math.PI/2+Math.PI/4;
var startX=ballX+ballRadius/4;
var startY=ballY-ballRadius*3/2;
var arrowLength=200;
var endX=-arrowLength*Math.cos(angle)+startX;
var endY=-arrowLength*Math.sin(angle)+startY;

//speed variables
var velocity=5;
var vx=velocity*Math.cos(angle);
var vy=velocity*Math.sin(angle);

//draws ball, and checks detections
function drawBall(){
    ctx.beginPath();
    if (ballStart) {
        shoot();
    }
    ctx.arc(ballX, ballY-ballRadius, ballRadius, 0, Math.PI*2, false);
    wallDetection();
    brickDetection();
    ctx.fill();
    ctx.closePath(); 
}

function shoot() {
    ballX-=vx;
    ballY-=vy;
}

function drawArrow() {
    if (ballStart) {

    }
    else  {
        ctx.beginPath();
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 5;
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }
}
function keyDownHandler(e) {
    if (e.key==" " || e.key=="Spacebar") {
        ballStart=true;
    }
}
