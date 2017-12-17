function trees(begin, end, angle) {
  this.begin = begin;
  this.end = end;
  this.angle = angle;
  this.branches = [];
  this.gstart = false;

  this.init = function() {
    for (var i = this.branches.length - 1; i >= 0; i--) {
      this.branches[i].show();
      this.branches[i].grow();
      this.branches[i].gstart = this.gstart;

      if (this.branches[i].finished && !this.branches[i].last && !this.branches[i].mutated) {
        this.branches.push(this.branches[i].mutate(angle)[0]);
        this.branches.push(this.branches[i].mutate(angle)[1]);
        this.branches[i].mutated = true;
      }
    }
  }

  this.root = function() {
    this.branches.push(new branch(this.begin, this.end));
  }

}
