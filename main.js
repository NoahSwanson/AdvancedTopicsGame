var score = 0;
var level = 1;
var bricksLeft = 1;
var bricks = [];
var interval;

function start() {
    interval = setInterval(draw, 10);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    drawArrow();
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

function nextLevel(){
    tempScore=0;
    level++;
    bricksLeft=level;

    //ball position variables reset
    ballX=20+(Math.random()*(canvas.width-40));
    ballY=canvas.height;
    ballStart=false;

    //arrow variables reset
    angle = Math.random()*Math.PI/2+Math.PI/4;
    startX=ballX+ballRadius/4;
    startY=ballY-ballRadius*3/2;
    endX=-arrowLength*Math.cos(angle)+startX;
    endY=-arrowLength*Math.sin(angle)+startY;

    //speed variables reset
    vx=velocity*Math.cos(angle);
    vy=velocity*Math.sin(angle);
}