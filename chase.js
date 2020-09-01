// Chase

// Jesse Turner


function setup() {
	createCanvas(600,600);
}

var x = 300;
var y = 300;
var x1 = 0;
var y1 = 0;
var w = 30;
var h = 30;
//var Collision = False;

function draw() {
	background(0);
	move();
	chase();
	ellipse(x, y, w, h);
	ellipse(x1, y1, 30, 5);
	collision();
}

function chase() {
	if (x1 > x) {
		x1 -= 3;
	}
	else x1 += 3;

	if (y1 > y) {
		y1 -= 3;
	}
	else y1 += 3;
}

function collision() {
	if ( (abs(x1 - x) < 30) && (abs(y1 - y) < 30))
	{
		fill(255, 0, 0);
	}
	else fill(255);
}



function move() {
	if (keyIsDown(UP_ARROW)) {
		y -= 5; }
	if (keyIsDown(DOWN_ARROW)) {
		y += 5; }
	if (keyIsDown(RIGHT_ARROW)) {
		x += 5; }
	if (keyIsDown(LEFT_ARROW)) {
		x -= 5;
	}
}