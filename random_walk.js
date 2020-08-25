// Thank you Dan from The Coding Train! 

var x;
var y;

function setup() {
	createCanvas(400,400);
	x = 200;
	y = 200;
	background(51);
}

function draw() {
	stroke(255);
	strokeWeight(2);
	point(x,y);

	var r = floor(random(4)); //from 0-3 (rounded down)

	switch (r) {
	case 0:
		x = x + 1;
		break;
	case 1:
		x = x - 1;
		break;
	case 2:
		y = y + 1;
		break;
	case 3:
		y = y - 1;
		break;
	}
}