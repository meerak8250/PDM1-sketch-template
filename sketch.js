const GRID_SIZE = 20;
let headX=20;
let headY=20;
let foodX;
let foodY;
let distFromCentre= 250;
let move= 20;

function setup(){
createCanvas(600,600);
//for X value of food
let numberOfCellsX = width/GRID_SIZE;
let randomCellX = random(numberOfCellsX);
let randomCellFloorX = floor(randomCellX);
foodX= randomCellFloorX*GRID_SIZE+GRID_SIZE/2;
//for Y value of food
let numberOfCellsY = height/GRID_SIZE;
let randomCellY = random(numberOfCellsY);
let randomCellFloorY = floor(randomCellY);
foodY= randomCellFloorY*GRID_SIZE+GRID_SIZE/2;
}

function draw(){
background(0);    
square(headX,headY,GRID_SIZE);
circle(foodX,foodY,GRID_SIZE);
}

//to make the snake head move
function keyPressed(){
    if (keyCode === UP_ARROW || key === "w");
        if(y > distFromCentre);{
            y -=move;
        }

    if (keyCode === LEFT_ARROW || key === "a") {
        if (x > distFromCentre) {
            x -= move;
        }
    }
    
    else if (keyCode === RIGHT_ARROW || key === "d") {
        if (x < width - distFromCentre) {
            x += move;
        }
    }
    else if (keyCode === DOWN_ARROW || key === "s") {
        if (y < height - distFromCentre) {
            y += move;
        }
    }     
}