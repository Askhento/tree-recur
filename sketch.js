var angle;
var rlen = 50;
var treez = [];
var b;
var e;

//var lev = [];

function setup() {
  createCanvas(400, 400);
  angle = PI / 8;
}

function draw() {
  background(0);
  for (var i = treez.length - 1; i > 0; i--) {
    treez[i].init();
  }
}


function mousePressed() {
  b = createVector(random(20,width-20), mouseY);
}

function mouseReleased() {
  e = createVector(b.x, mouseY);

	var offset = height - b.y;
	b.y = height;
	e.y = e.y + offset;
  treez.push(new trees(b, e, angle));
  treez[treez.length - 1].root();
  treez[treez.length - 1].gstart = true;
}
