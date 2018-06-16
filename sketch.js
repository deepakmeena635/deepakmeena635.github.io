let scl = 10;
let cols;
let rows;
let inc = 0.02; // increment value for perlin noise
let fr; // frame rate for display
let zoff = 0;
let particles = [];
let flowfield;
let numParticles;
let modeSelectMenu;
let drawMode = "White Flies";
let reseedMode;
let reseedModeCurrent = true;
let displayFieldMode;
let displayFieldModeCurrent = false;
let modalButton;


function windowResized(){
  resizeCanvas(windowWidth, windowHeight)
}

function setup() {
  // createCanvas(600, 400);
  canvas = createCanvas(windowWidth, windowHeight );

  ff = createGraphics(windowWidth, windowHeight ); // for displaying flow field

  cols = floor(width / scl);
  rows = floor(height / scl);
  numParticles = 2500;
  seedParticles(numParticles);
  flowfield = new Array(cols * rows);
  background(0);

  canvas.position(0,0);
  canvas.style('z-index', '-1')

}

function seedParticles(num) {
  particles = [];
  for (let i = 0; i < num; i++) {
    particles[i] = new Particle();
  }
}

function draw() {
  if (drawMode == "White Flies") {
    background(0); // draw solid background
  } else if (drawMode == "Coloured Comets") {
    background(0, 0, 0, 50); // draw slightly translucent background
  } else if (drawMode == "Ghost Web" || drawMode == "Coloured Web") {
    // no need to re-draw background
  }
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      let angle = noise(xoff, yoff, zoff) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(0.15);
      flowfield[index] = v;
      xoff += inc;
      if (displayFieldModeCurrent) {

      }
    }
    yoff += inc;
  }
  zoff += inc*sin(yoff*inc*1);

  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update(zoff);
    particles[i].edges();
    particles[i].show(zoff);
  }

}
