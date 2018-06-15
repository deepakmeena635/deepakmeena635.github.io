var fr;
var inc = 0.01 ;
var scl =10 ;
var zoff = 0 ;

function setup(){
  createCanvas(200,200)
  pixelDensity(1);
  cols = floor(width/scl)
  rows = floor(height/scl)
  fr = createP();

  for (var i=0  ; i<100; i++ ){
    particle[0] = new particle();
  }

}

function draw(){
    background(255)
    var yoff = 0 ;
    for (var y =0 ; y< height; y++ ){

      var xoff =0 ;
      for (var x=0 ; x<width ;x++ ){

          var index = (x + y *width)*4
          var angle = noise(xoff, yoff, zoff )*TWO_PI;
          var v = p5.Vector.fromAngle(angle);

          xoff +=inc ;
          stroke(0)

          push()
          translate(x*scl, y*scl);
          rotate(v.heading());
          line(0,0,scl,0 )
          pop()

        }
        yoff +=inc;
        zoff += 0.001;
    }
    particle[0].update()
    particle[0].show()
    fr.html(floor(frameRate()))
}
