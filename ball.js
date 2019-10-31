var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballX=canvas.width/2;
var ballRadius=10;
var ballY=canvas.height+10;

function drawBall(){
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height-ballRadius, ballRadius, 0, Math.PI*2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}