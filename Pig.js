class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255;
  }
display(){
  console.log(this.body.speed);
  if(this.body.speed<3){
    super.display();

  }
  else{
    //pig should be removed from the world
World.remove(world,this.body);
push();
//to reduce the Visiblity by 5 in each frame
this.Visiblity = this.Visiblity- 5;

//replace the image with a transparent layer (image of the pig)
tint(255,this.Visiblity);
image(this.image, this.body.position.x, this.body.position.y, 50, 50);
pop();
}
}
};