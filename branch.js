function branch(begin , end){
   this.begin = begin;
   this.end = end;
   this.finished = false;

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

      return newBr;

   }

}
