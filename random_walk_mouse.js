// Random Walker Towards Mouse


var x;
var y;

function setup() {
	createCanvas(400,400);
	x = 200;
	y = 200;
	background(51);
}

var rand = 0;

function draw() {
	stroke(255);
	strokeWeight(2);
	point(x,y);
	step();
}


function step() {
	if (mouseX > x) {
		rand = random(1);
		if (rand < 0.5) {
			x += 1;
		} else if (rand < 0.65) {
			x -= 1; 
		} else if (rand < 0.80) {
			y += 1;
		} else if (rand < 0.95) {
			y -= 1;
		}
	}
	if (mouseX < x) {
		rand = random(1);
		if (rand < 0.5) {
			x -= 1;
		} else if (rand < 0.65) {
			x += 1; 
		} else if (rand < 0.80) {
			y += 1;
		} else if (rand < 0.95) {
			y -= 1;
		}
	} 
	if (mouseY > y) {
		rand = random(1);
		if (rand < 0.5) {
			y += 1;
		} else if (rand < 0.65) {
			x += 1; 
		} else if (rand < 0.80) {
			x -= 1;
		} else if (rand < 0.95) {
			y -= 1;
		}
	} 
	if (mouseY < y) {
		rand = random(1);
		if (rand < 0.5) {
			y -= 1;
		} else if (rand < 0.65) {
			x += 1; 
		} else if (rand < 0.80) {
			x -= 1;
		} else if (rand < 0.95) {
			y -= 1;
		}
	}
}
