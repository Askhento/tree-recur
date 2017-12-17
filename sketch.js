var angle;
var rlen = 100;
var tree = [];
var lev = [];

function setup() {
  createCanvas(400, 400);
  angle = PI / 8;

  var b = createVector(width / 2, height);
  var e = createVector(width / 2, height - rlen);

  tree[0] = new branch(b, e);
}

function draw() {
  background(0);
  for (var i = tree.length - 1; i >= 0; i--) {
    tree[i].show();
    tree[i].grow();
    if (tree[i].finished && !tree[i].last && !tree[i].mutated) {
      tree.push(tree[i].mutate(angle)[0]);
      tree.push(tree[i].mutate(angle)[1]);
      tree[i].mutated = true;
    }
    	if(tree[i].last && !tree[i].mutated){
    	  lev.push(new leaves(tree[i].end.copy()));
				tree[i].mutated = true;
    	}
  }
  for (var i = 0; i < lev.length; i++) {
    lev[i].show();
    lev[i].fall();
  }
}


function mousePressed() {
  for (var i = tree.length - 1; i >= 0; i--) {
    tree[i].gstart = true;
  }
}

function mouseReleased() {
	for (var i = tree.length - 1; i >= 0; i--) {
    tree[i].gstart = false;
  }
}
