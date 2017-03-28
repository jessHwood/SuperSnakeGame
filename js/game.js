$(document).ready(function(){

// canvas variables
var canvas = $("#canvas")[0];
var ctx =  canvas.getContext("2d");
var width = $('#canvas').width();
var height = $('#canvas').height();

//canvas styling
ctx.fillStyle = "black";
ctx.fillRect(0,0,width,height);
ctx.strokeStyle = "green";
ctx.strokeRect(0,0,width,height);

var cellWidth = 10;
var food; 
var snakeArray;

// making the snake]
createSnake();
function createSnake() {
	var length = 5; // snake length
	snakeArray = [];
	for (var i = length-1; i>=0; i--){
		snakeArray.push({x: i, y: 0});
	}
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
});