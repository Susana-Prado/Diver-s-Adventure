const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;


let spacePressed = false;
let frame = 0;
let score = 0;
let gamespeed = 2; //elements == speed or multiple  


//Create player
function start(){
    //Clear Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //Draw obstacles
    //handleObstacles(); -------------------------->not defined
    //Draw player
    ctx.fillRect(10, canvas.height - 250, 50, 50);
    //diver.draw(); -------------------------------> not defined
    
    //Loop
    requestAnimationFrame(start);
    frame++;
}

start();


