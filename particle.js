function particle(){
    this.pos = createVector(random(width),0);
    this.vel = p5.Vector.Random()
    this.acc = createVector(0,0);

  this.update = function(){

      this.pos.add(this.vel);
      this.vel.add(this.acc);
      this.acc.mult(0);

    }

    this.applyForce = function(force){
      this.acc.add(force);
    }

    this.show = function(){

      stroke(0)
      point(this.pos.x, this.pos.y);

    }

    this.edges = function(){
      if (this.pos.x>width) this.pos.x =0 ;
    }


}
