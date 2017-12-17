function leaves(pos) {
  this.pos = pos;


     this.show = function() {
       noStroke();
       fill(255,0,0,100);
       ellipse(this.pos.x , this.pos.y, 5, 5);
     }

     this.fall = function(){
        this.pos.y += random(1);
        this.pos.x += random(1);

     }

}
