var angle;
var rlen  = 50;
var tree = [];

function setup() {
	createCanvas(400, 400);
	angle = PI/4;

	var b = createVector(width/2 , height);
	var e = createVector(width/2, height-rlen);

	 tree[0]= new branch(b,e);
}

function draw() {
  background(0);
	for(var i = 0; i < tree.length; i++){
	  tree[i].show();
  }
}

function mousePressed() {
     for(var i = tree.length -1; i>=0; i--){

			 if(!tree[i].finished){
        tree.push(tree[i].mutate(angle)[0]);
				tree.push(tree[i].mutate(angle)[1]);
			}
			tree[i].finished = true;
		 }
}
