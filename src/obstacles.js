const obstaclesArray = [];

class Obstacle {
    constructor(){
        this.top = (Math.random() * canvas.height/3);
        this.bottom = (Math.random() * canvas.height/3);
        this.x = canvas.width;
        this.width = 20;
    }

    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, 0, this.top, this.bottom);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.top, this.bottom);
    }

    updatePosition(){
        this.x -= gamespeed;
        this.draw();
    }
}

function handleObstacles(){
    if(frame%100 === 0){
        obstaclesArray.unshift(new Obstacle());
    }
    for (let i = 0; i < obstaclesArray.length; i++){
        obstaclesArray[i].updatePosition();
    }
    if (obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0])
    }
}