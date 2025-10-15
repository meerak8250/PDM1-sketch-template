const GRID_SIZE = 20;
let headX=20;
let headY=20;
let foodX;
let foodY;
let xDir= 1;
let yDir= 0;
let gameOver= false;

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
frameRate(3);
}
//declare functions/ have a background
function draw(){
background(0);    
isGameOver();
food();
}

//initial food
function food(){
    fill(255);
    circle(foodX,foodY,GRID_SIZE);
}

//initial snake
function snake(){
fill(255);
square(headX,headY,GRID_SIZE);
headX+= GRID_SIZE * xDir;
headY+= GRID_SIZE * yDir; //WHY DOES THIS WORK?
}

//to make the snake head move
function keyPressed(){
    if (keyCode === UP_ARROW || key === "w");{
        xDir= 0;
        yDir= -1;
        } //y axis

    if (keyCode === LEFT_ARROW || key === "a") {
        xDir= -1;
        yDir= 0; // x axis
    }
    
    if (keyCode === RIGHT_ARROW || key === "d") {
        xDir= 1;
        yDir= 0; //x axis
    }
    if (keyCode === DOWN_ARROW || key === "s") {
        xDir= 0;
        yDir= 1; //y axis
    }     
}

//seeing if game ends/ player can continue to play
function isGameOver(){
    if (!gameOver){
        snake();
    }   
    if (headX>=width||headX<0||headY>=height||headY<0){ 
    //if the snake head is >= the width or the height then it will stop moving so that it doesnt go out of bounds
        frameRate(0);
        gameOver=true;
        return gameOver;
    }
}

