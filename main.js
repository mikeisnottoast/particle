let counter = 0
let padpos = 0
let padbot = 8
let padtop = -8
let npos = 0
let nbot = 8
let ntop = -8
let edge = 0
function setup() {
createCanvas(300, 100);
edge = width - 10;
ball = new Ball();
pad = new Pad();
npc = new Npc();
}
	
function draw(){

padbot = padpos+8;
padtop = padpos-8;
nbot = npos+8;
ntop = npos-8;
	background(0);
	npc.show();
	npc.play();
	pad.show();
ball.show();
ball.move();
console.log(padpos);




}

//pong ball
class Ball{

	constructor(){
	this.x = width/2;
    this.y = height/2;
    this.xdirection = 0;
    this.yspeed = 1;
}


show(){
	fill(255);
	ellipse(this.x,this.y,10,10);
}

move(){
	

if (this.y >= height){this.yspeed = -1;}
if (this.y <= 0){this.yspeed = 1;}
	if (this.xdirection  == 0){


		this.x --;
		this.y += this.yspeed;
		if (this.x == 10){
			if (this.y <= padbot && this.y >= padtop){
				this.xdirection = 1;
			}
		}

	}

	if (this.xdirection  == 1){


		this.x ++;
			this.y += this.yspeed;
		if (this.x == edge){
			if (this.y <= nbot && this.y >= ntop){
				this.xdirection = 0;
			}
		}

}}
}


//pad
class Pad{
	constructor(){	this.x = 10;

}

show(){
	fill(0,255,0);
	rect(this.x,mouseY,5,15);
	padpos = mouseY;
}

}
// NPC Pad
class Npc{

constructor(){this.x = width-10;
this.y = height/2;
this.direction = 0;}

show(){fill(255,0,0);
rect(this.x,this.y,5,15);
npos = this.y;}

play(){
	if (this.direction == 0){
		this.y++;
		if(this.y >= height){this.direction = 1;}}
	if (this.direction == 1){
		this.y--;
		if(this.y <= 0){this.direction = 0;}}
}


}