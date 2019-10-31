var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.addEventListener("keydown", keyDownHandler, false);

//ball variables
var ballX=canvas.width/2;
var ballRadius=10;
var ballY=canvas.height+10;
var ballStart=false;

//arrow variables
var angle = Math.random()*Math.PI;
var startX=ballX+ballRadius/4;
var startY=ballY-ballRadius*3/2;
var arrowLength=120;
var endX=-arrowLength*Math.cos(angle)+startY;
var endY=-arrowLength*Math.sin(angle)+startY;

//speed variables
var velocity=30;
var vx=velocity*Math.cos(angle);
var vy=velocity*Math.sin(angle);

function drawBall(){
    ctx.beginPath();
    if (ballStart) {
        shoot();
    }
    ctx.arc(canvas.width/2, canvas.height-ballRadius, ballRadius, 0, Math.PI*2, false);
    ctx.fill();
    ctx.closePath();
    
}

function shoot() {
    ballX+=vx;
    ballY+=vy;
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