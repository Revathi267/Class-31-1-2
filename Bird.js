class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png")
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x>250 && this.body.velocity.x>10){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1])
    }
  }
}




/*
position = [x2,y2]

trajectory = [[x1,y1], [x2,y2], [x3,y3], [x4,y4]....]
x1=[0][0]          y1=[0][1]
x2=[1][0]          y2=[1][1]
x3=[2][0]          y3=[2][1]


[i][0]             [i][1]


*/