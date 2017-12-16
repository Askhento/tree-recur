function branch(begin , end){
   this.begin = begin;
   this.end = end;
   this.finished = false;
   this.last = false;

   this.show = function() {
     stroke(255);
     line(this.begin.x , this.begin.y, this.end.x, this.end.y);
   }
   this.mutate = function(a) {
      var dir  = p5.Vector.sub(this.end, this.begin);

      dir.rotate(a);
      dir.mult(0.67);
      var newEnd = p5.Vector.add(dir, this.end);
      var newBr = [];
      newBr.push(new branch(this.end, newEnd));

      dir.rotate(-2*a);
      newEnd = p5.Vector.add(dir, this.end);
      newBr.push(new branch(this.end, newEnd));

      if(dir.mag()<= 10){
          newBr[0].last = true;
          newBr[1].last = true;
      }

      return newBr;
   }
}

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
