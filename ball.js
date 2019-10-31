var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballX=canvas.width/2;
var ballRadius=10;
var ballY=canvas.height+10;
var angle = Math.random()*Math.PI;
//arrow variables
var startX=ballX+ballRadius/4;
var startY=ballY-ballRadius*3/2;
var arrowLength=120;
var endX=-arrowLength*Math.cos(angle)+startY;
var endY=-arrowLength*Math.sin(angle)+startY;

function drawBall(){
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height-ballRadius, ballRadius, 0, Math.PI*2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

function shoot() {

}

function drawArrow() {
    ctx.beginPath();
    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 5;
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}