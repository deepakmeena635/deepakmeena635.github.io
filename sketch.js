class drop{
  
   constructor(){
      this.x = random(0, windowWidth )
      this.y =0
     this.speed= 50; 
     this.dropSize = 5; 
    } 
    reset(){
      this.x = random(0, windowWidth )
      this.y =0
     this.speed= 10; 
     this.dropSize = 5; 
    } 
    
   fall(speed =0 ){
     this.y =this.y+ this.speed
     // console.log(this.y)
      if (speed !=0 ){
        this.speed = speed
      }
     if (this.y <= height && this.y > height- 50  ){
        // console.log(".")
        var myDegrees = int(15+ 30/(this.y-15))
        let la = p5.Vector.fromAngle(radians(myDegrees), this.dropSize);
        let ra = p5.Vector.fromAngle(radians(myDegrees), this.dropSize);
        line(this.x , this.y+this.dropSize, this.x-la.x, this.y-la.y)
        line(this.x , this.y+this.dropSize, this.x+ra.x, this.y-ra.y)
        line(this.x, this.y , this.x, this.y+this.dropSize )
        this.reset();
      }
      line(this.x, this.y , this.x, this.y+this.dropSize )
      stroke(255)
      
  }
  
}

