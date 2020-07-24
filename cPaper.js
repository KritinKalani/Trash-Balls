class cPaper{
    constructor(x,y,radius){
        var c_options = {
            isStatic: false,
            restitution: 0.3,
            friction: 1,
            density: 20
        }
        this.body = Bodies.circle(x,y,radius,c_options);
        this.image = loadImage("paper.png");
        World.add(world,this.body)
    }
    display() {
        fill(0,255,0);
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y,50,50);
    }
};