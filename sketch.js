nbDrops = 600
var arr = [] ; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var i =0 ; i< nbDrops ; i++){
     arr[i] = new  drop();
  }
  
}

function draw() {
   background(50)

//   circle(0, height, 30)
  // fill(255)
  // stroke(255)
    for(var i =0 ; i< nbDrops ; i++){
      stroke(noise(i*i,i,sin(i))*255, noise(i*i,2*i,cos(i))*255,noise(i,i*i, i*i)*255)
     arr[i].fall(random(0,1)*30);
    }
  // background(10)
}
