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

	if(typeof gameLoop != "undefined") clearInterval(gameLoop);
	gameLoop = setInterval(paintSnake, 80);
}

init();

// making the snake
function createSnake() {
	var length = 5; // snake length
	snakeArray = [];
	for (var i = length-1; i>=0; i--){
		//horizontal snake starting from the top left
		snakeArray.push({x: i, y: 0});
	}
}

function createFood() {
	food = {x: Math.round(Math.random()*(width-cellWidth)/cellWidth),
			y: Math.round(Math.random()*(height-cellWidth)/cellWidth)
};
// creates cell x/y between 0-44
// 45(450/10) positions accross the rows and columns
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
	// adding cell color

		paintCanvas();

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

		if(checkCollision(nx,ny,snakeArray)) {
			//restarts
			init();
		}
// if the head position matches the position of the food, create a new head
		if(nx == food.x && ny == food.y) {
			var tail = {x: nx, y: ny};
			createFood();
		} else {
			var tail = snakeArray.pop();
			tail.x = nx; tail.y = ny;
		}
				snakeArray.unshift(tail);


// creating fill snakeArray
	for (var i = 0; i< snakeArray.length; i++) {
		var paint = snakeArray[i];
		paintFood(paint.x, paint.y);
		ctx.fillStyle = "yellow";
		ctx.fillRect(paint.x*cellWidth, paint.y*cellWidth, cellWidth, cellWidth);
		ctx.strokeStyle = "black";
		ctx.strokeRect(paint.x*cellWidth, paint.y*cellWidth, cellWidth, cellWidth);
		}

		paintFood(food.x, food.y);

		// add keydown controls to snake
      $(document).keydown(function (e) {
            var key = e.which;
            if (key == '37' && d != 'right') d = 'left';
            else if (key == '38' && d != 'down') d = 'up';
            else if (key == '39' && d != 'left') d = 'right';
            else if (key == '40' && d != 'up') d = 'down';
        })
}


function paintFood(x,y) {
	ctx.fillStyle = "red";
	ctx.fillRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
	ctx.strokeStyle = "black";
	ctx.strokeRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
}

function checkCollision(x,y,array) {
	 for (var i = 0; i<array.length; i++) {
	 		if(array[i].x == x && array[i].y == y)
	 			return true;
			}
	 			return false;
	 
}
	
});