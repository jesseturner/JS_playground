// Population

// Jesse Turner
// Using p5.js library

// Uses boid.js

const flock = [];

function setup() {
	createCanvas(600,600);
	for (let i = 0; i < 100; i++) {
		flock.push(new Boid());
	}	
}

function draw() {
	background(0);
	for (let boid of flock) {
		boid.update();
		boid.show();
	}
}

