// Boid

// Using p5.js library

// Used in population.js


class Boid {
	constructor() {
		this.position = createVector(width/2, height/2);
		this.velocity = p5.Vector.random2D(); // random direction. Unit vectors.
		this.velocity = setMag(random(0.5, 1.5)); // this is used for random speed. 
		this.acceleration = createVector();
	}

	update() {
		this.position.add(this.velocity);
		this.velocity.add(this.acceleration);
	}

	show() {
		strokeWeight(16);
		stroke(255);
		point(this.position.x, this.position.y);
	}
}
