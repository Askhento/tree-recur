function branch(begin , end){
   this.begin = begin;
   this.end = end;
   this.finished = false;
   this.last = false;
   this.scale = 0;
   this.gstart = false;
   this.mutated = false;

   this.show = function() {
     stroke(255);
     var newEnd = createVector(this.end.x, this.end.y);
     newEnd.mult(scale);
     line(this.begin.x , this.begin.y, newEnd.x, newEnd.y);
   }

   this.grow = function() {
     if(this.gstart && !this.finished) {
     if(this.scale <1 ) {
       this.scale += 0.1;
     } else {
       this.finished = true;
     }
    }
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
