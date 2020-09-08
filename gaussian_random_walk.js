// Gaussian Random Walker


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

	var rand = floor(random(4)); //from 0-3 (rounded down)

	switch (rand) {
	case 0:
		x += randomGaussian(2, 2);
		break;
	case 1:
		x -= randomGaussian(2, 2);
		break;
	case 2:
		y += randomGaussian(2, 2);
		break;
	case 3:
		y -= randomGaussian(2, 2);
		break;
	}
}