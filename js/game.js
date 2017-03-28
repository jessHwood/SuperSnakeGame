$(document).ready(function(){

// canvas variables
var canvas = $("#canvas")[0];
var ctx =  canvas.getContext("2d");
var width = $('#canvas').width();
var height = $('#canvas').height();


var cellWidth = 10;
var food; 
var snakeArray;
var d; //default direction

function init() {
	d = "right"; 
	paintCanvas();
	createSnake();
	createFood();

	if(typeof gameLoop != "undefined") clearInterval(game_loop);
	gameLoop = setInterval(paintSnake, 100);
}

init();

// making the snake
function createSnake() {
	var length = 5; // snake length
	snakeArray = [];
	for (var i = length-1; i>=0; i--){
		snakeArray.push({x: i, y: 0});
	}
}

function createFood() {
	food = {x: Math.random()*(width-cellWidth)/cellWidth,
			y: Math.random()*(height-cellWidth)/cellWidth
};
// creates cell coordinates 0-44
		return food;
}


function paintCanvas() {
	//canvas styling
	ctx.fillStyle = "black";
	ctx.fillRect(0,0,width,height);
	ctx.strokeStyle = "yellow";
	ctx.strokeRect(0,0,width,height);
}

function paintSnake() {

		paintCanvas();

		//pop the tail cell to replace the front head cell when food is eaten
		var nx = snakeArray[0].x; // positions of head cell
		var ny = snakeArray[0].y;

		//detecting edge
		if (nx>width/cellWidth) nx =1;
		if(nx<0) nx = width/cellWidth-1;
		if(ny>height/cellWidth) ny = 1;
		if(ny < 0) ny = height/cellWidth - 1;
		// snake movement and head placement
		if(d == "right") nx++;
		else if(d == "left") nx--;
		else if(d == "up")ny--;
		else if(d == "down")ny++;

		// if(check_collision(nx,ny,snakeArray) == true) {
			// status = "dead";
			// return;
		// }

		var newHead = {x: nx, y:ny};
		snakeArray.unshift(newHead);

// creating fill snakeArray
	for (var i = 0; i< snakeArray.length; i++) {
		var paint = snakeArray[i];
		paintFood(paint.x, paint.y);

// adding cell color
		ctx.fillStyle = "yellow";
		ctx.fillRect(paint.x*cellWidth, paint.y*cellWidth, cellWidth, cellWidth);
		ctx.strokeStyle = "black";
		ctx.strokeRect(paint.x*cellWidth, paint.y*cellWidth, cellWidth, cellWidth);
}
		paintFood(food.x, food.y);
}
		paintSnake();

function paintFood(x,y) {
	ctx.fillStyle = "red";
	ctx.fillRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
	ctx.strokeStyle = "black";
	ctx.strokeRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
}

	
});