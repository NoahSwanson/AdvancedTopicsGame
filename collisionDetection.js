//checks to see if ball is hitting wall. if so, direction switches
function wallDetection(){
    if (ballX<ballRadius || ballX>canvas.width-ballRadius) {
        vx=-vx;
    }
    if (ballY<2*ballRadius||ballY>canvas.height+ballRadius) {
        vy=-vy;
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
            vy=-vy;
        }
    }
}