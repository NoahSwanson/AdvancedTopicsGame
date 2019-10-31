var score = 0;
var level = 1;
var bricksLeft = 2;
var bricks = [];

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawStamp();
    drawStage();

    drawBall();
}

function drawStage() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 8, 20);
    if (bricksLeft>0) {
        ctx.fillText("Bricks left to place: "+bricksLeft,8,40);
    }
    else {
        ctx.fillText("Click spacebar to start.", 8,40);
    }
}

var interval = setInterval(draw, 10);