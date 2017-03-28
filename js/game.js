$(document).ready(function(){

// canvas variables
var canvas = $("#canvas")[0];
var ctx =  canvas.getContext("2d");
var width = $('#canvas').width();
var height = $('#canvas').height();

//canvas styling
ctx.fillStyle = "black";
ctx.fillRect(0,0,width,height);
ctx.strokeStyle = "yellow";
ctx.strokeRect(0,0,width,height);

var cellWidth = 10;
var food; 
var snakeArray;

// making the snake]
createSnake();
createFood();

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

function paintSnake() {
	for (var i = 0; i< snakeArray.length; i++) {
		var paint = snakeArray[i];
// adding cell color
		ctx.fillStyle = "yellow";
		ctx.fillRect(paint.x*cellWidth, paint.y*cellWidth, cellWidth, cellWidth);
		ctx.strokeStyle = "black";
		ctx.strokeRect(paint.x*cellWidth, paint.y*cellWidth, cellWidth, cellWidth);
	}
}
		paintSnake();

function paintFood(x,y) {
	ctx.fillStyle = "red";
	ctx.fillRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
	ctx.strokeStyle = "black";
	ctx.strokeRect(x*cellWidth, y*cellWidth, cellWidth, cellWidth);
}

		paintFood(food.x, food.y);
});