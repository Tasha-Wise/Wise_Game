
class Player{
	constructor(){
		this.r = 300;
		this.x = w / 2;
		this.y = h - this.r;
		this.speed = 2;
		this.direction = 'still';

	}

	display(){
		//rec(this.x, this.y, this.r, this.r)
		image(playerImg, this.x, this.y, this.r, this.r)

	}

	move(){
		//console.log(I can move);
		switch (this.direction){
			case 'still':
			//dont move anything
			break;
			case 'up':
			//decrease y pos
			if (this.y > 0){
			this.y -= this.speed;
			}
			break;
			case 'down':
			//increase y pos
			if (this.y < h - this.r){
			this.y += this.speed;
			}
			break;
			case 'right':
			//increase x pos
			if (this.x < w - this.r){
			this.x += this.speed;
			}
			break;
			case 'left':
			//decrease x pos
			if (this.x > 0){
			this.x -= this.speed;
			}
			break;
			default:
			break;
			}
	}
}