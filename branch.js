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
     var newEnd = p5.Vector.sub(this.end, this.begin);
     strokeWeight(map(newEnd.mag(),5,100,1,10));
     newEnd.mult(this.scale);
     newEnd.add(this.begin);
     line(this.begin.x , this.begin.y, newEnd.x, newEnd.y);
   }

   this.grow = function() {
     if(this.gstart && !this.finished) {
     if(this.scale <1 ) {
       this.scale += 0.05;
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

      if(this.gstart) {
        newBr[0].gstart = true;
        newBr[1].gstart = true;
      }
      if(dir.mag()<= 5){
          newBr[0].last = true;
          newBr[1].last = true;
      }
      return newBr;
   }
}
