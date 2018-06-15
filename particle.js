
function Particle() {
  this.init_color = random(0,100);
  this.pos = createVector(floor(random(width)), floor(random(height)));
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.maxspeed = 2;
  this.prevPos = this.pos.copy();

  this.update = function(zof) {
    this.vel.add(this.acc.mult(0.2));
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.init_color +=1 ;
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.show = function(zof) {
    switch (drawMode) {
      case 'White Flies': // white lines
        colorMode(RGB, 255,255,255 , 100);
        // stroke(255, 255, 255, 100);
        stroke( floor( (this.init_color+120*sin(0.03*this.init_color))%255), floor( (this.init_color+100*sin(0.05*this.init_color))%255),floor((this.init_color+100*sin(0.01*this.init_color))%255),  100)

        strokeWeight(1);
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        break;
      default:
        colorMode(RGB, 255, 255, 255, 100);
        stroke(255, 255, 255, 100);
        strokeWeight(1);
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    }

    this.updatePrev();
  }

  this.updatePrev = function() {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  }

  this.edges = function() {
    if (this.pos.x > width) {
      this.pos.x = 0;
      this.updatePrev();
    }
    if (this.pos.x < 0) {
      this.pos.x = width;
      this.updatePrev();
    }
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.updatePrev();
    }
    if (this.pos.y < 0) {
      this.pos.y = height;
      this.updatePrev();
    }
  }

  this.follow = function(vectors) {
    let x = floor(this.pos.x / scl);
    let y = floor(this.pos.y / scl);
    let index = x + y * cols; // taking 2D value into a 1D array
    let force = vectors[index];
    this.applyForce(force);
  }

}
