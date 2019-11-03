var tempScore=0;
//checks to see if ball is hitting wall. if so, direction switches
function wallDetection(){
    if (ballX<ballRadius || ballX>canvas.width-ballRadius) {
        vx=-vx;
    }
    if (ballY<2*ballRadius) {
        vy=-vy;
    }
    if (ballY>canvas.height+ballRadius) {
        window.alert("HAHAHA YOU LOSE");
        window.alert("Jk that sucks i'm sorry please play again");
        ballY=0;
        location.reload();
    }
}

//checks to see if ball is hitting any of the blocks. if so, y direction flips
function brickDetection() {
    var leftX,rightX,topY,bottomY;
    
    for (i=0;i<bricks.length;i++) {
        leftX=bricks[i].x;
        rightX=bricks[i].x+brickWidth;
        topY=bricks[i].y;
        bottomY=bricks[i].y+brickHeight;

        if ((ballX+ballRadius>leftX&&ballX<rightX+ballRadius)&&(ballY<bottomY+ballRadius&&ballY>topY)) {
            brickHit(i);
        }
    }
}

function brickHit(brickNum) {
    bricks.splice(brickNum,1);
    score++;

    if (tempScore!=level-1) {
        vy=-vy;
        tempScore++;
    }
    else {
        vy=0;
        vx=0;
        nextLevel();
    }
}