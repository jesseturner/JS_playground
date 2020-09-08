// Paint Splatter

class Drop {
	constructor() {
		this.position = createVector(randomGaussian(300, 100), randomGaussian(300, 100)); // randomGaussian(mean, stand dev)
	}

	show(r, g, b) {
		strokeWeight(16);
		stroke(r, g, b);
		point(this.position.x, this.position.y);
	}
}

const arr = [];
var r;
var g;
var b;

function setup() {
	createCanvas(600,600);
	for (let i = 0; i < 100; i++) {
		arr.push(new Drop());
	}	
	r = random(255);
	g = random(255);
	b = random(255);
}

function draw() {
	background(0);
	for (let drop of arr) {
		drop.show(r, g, b);
	}
}