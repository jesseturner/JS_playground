// Random Walker Right

// Uses fractional probability

var x;
var y;

function setup() {
	createCanvas(400,400);
	x = 0;
	y = 200;
	background(51);
}

var prob_right = 0.40;

function draw() {
	stroke(255);
	strokeWeight(2);
	point(x,y);

	var rand = random(1); //from 0-3 (rounded down)

	if (rand < prob_right) {
		x = x + 1;
	} else if (rand < (prob_right + 0.2)) {
		x = x - 1; 
	} else if (rand < (prob_right + 0.4)) {
		y = y + 1;
	} else if (rand < (prob_right + 0.6)) {
		y = y - 1;
	}
}
