var angle;
var leng  = 200;
//var slider;
function setup() {
	createCanvas(windowWidth, windowHeight);
	//slider = createSlider(0,PI,PI/4,0.01);
	angle = PI/3;
}

function draw() {
  background(0);
	//angle = slider.value();

	translate(width/2,height);
  var m = createVector(mouseX-width/2,mouseY-height);
	rotate(m.heading()+PI/2);

	stroke(255);
	branch(leng);
}

function branch(len){
	line(0,0,0,-len);
 translate(0,-len);

		 if(len>7) {
			 push();
			 rotate(angle);
			 branch(len*0.67);
			 pop();

			 push()
			 rotate(-angle);
			 branch(len*0.67);
			 pop();

	 }


}
