function leaves(pos) {
  this.pos = pos;
  this.speed = createVector(random(-1,1),  random(1,2));
     this.show = function() {
       noStroke();
       fill(255,0,0,100);
       ellipse(this.pos.x , this.pos.y, 5, 5);
     }

     this.fall = function(){
       if(this.pos.y<height) {
        this.pos.add(this.speed);
      }


     }

}
