function trees(begin, end, angle) {
  this.begin = begin;
  this.end = end;
  this.angle = angle;
  this.branches = [];
  this.finished = false;
  this.gstart = false;

  this.init = function() {
    if (!this.finished) {
      for (var i = this.branches.length - 1; i >= 0; i--) {
        this.branches[i].show();
        this.branches[i].grow();
        this.branches[i].gstart = this.gstart;

        if (this.branches[i].finished && !this.branches[i].last && !this.branches[i].mutated) {
          this.branches.push(this.branches[i].mutate(angle)[0]);
          this.branches.push(this.branches[i].mutate(angle)[1]);
          this.branches[i].mutated = true;
        }
        this.finished = this.branches[i].last;
      }
    }
  }

  this.root = function() {
    this.branches.push(new branch(this.begin, this.end));
  }

}
