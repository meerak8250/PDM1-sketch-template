const GRID_SIZE = 20;
let headX=20;
let headY=20;
let foodX;
let foodY;
let width=600;
let numberOfCells = width/GRID_SIZE;
let randomCell;
let randomCellFloor;

function setup(){
createCanvas(600,600);
randomCell = random(numberOfCells);
randomCellFloor = floor(randomCell);
foodX= randomCellFloor*GRID_SIZE+GRID_SIZE/2;
foodY= randomCellFloor*GRID_SIZE+GRID_SIZE/2;
}

function draw(){
background(0);    
square(headX,headY,GRID_SIZE);
circle(foodX,foodY,GRID_SIZE);
}