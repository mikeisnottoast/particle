let phase = 0
let counter = 0

function setup() {
createCanvas(window.innerWidth, window.innerHeight);
frameRate(10);
}
function draw(){
	counter++;
	if (counter % 10){
		phase  += 10;
		if (phase == 100){phase = -100;}
	}

	background(0);
translate(width/2,height/2);

	fill(255);
	ellipse(0,0,100,100);

	fill(0);
	ellipse(phase, 0, 100,100);
}