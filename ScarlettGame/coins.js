
class Coins{
	constructor(){
		this.r = 90;
		this.x = random(w);
		this.y = 0 - this.r;
		this.speed = 5;
	}
	display(){
		//ellipse(this.x, this.y, this.r, this.r)
		image(coinsImg, this.x, this.y, this.r, this.r)
	}
	move (){
		this.y+= this.speed; 
	}
}