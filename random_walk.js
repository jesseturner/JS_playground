// Thank you Dan from The Coding Train! 

var x;
var y;

function setup() {
	createCanvas(400,400);
	x = 200;
	y = 200;
	background(51);
}
var r = 100;
var g = 100;
var b = 100;

function draw() {
	stroke(r, g, b);
	strokeWeight(2);
	point(x,y);

	var rand = floor(random(4)); //from 0-3 (rounded down)

	switch (rand) {
	case 0:
		x = x + 1;
		r = r + 10;
		break;
	case 1:
		x = x - 1;
		g = g + 10;
		break;
	case 2:
		y = y + 1;
		b = b + 10;
		g = g - 10;
		break;
	case 3:
		y = y - 1;
		r = r - 10;
		break;
	}
}