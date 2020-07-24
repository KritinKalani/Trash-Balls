class Carrier {
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body1 = Bodies.rectangle(660,575,20,170,options);
        this.body2 = Bodies.rectangle(700,650,100,20,options);
        this.body3 = Bodies.rectangle(740,575,20,170,options);

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;

        this.image = loadImage("dustbingreen.png")
        World.add(world,this.body1)
        World.add(world,this.body2)
        World.add(world,this.body3)
    }
    display() {
        //var pos = this.body2.position;
        /* rectMode(CENTER);
        fill("red");
        rect(660,575,20,170);
        fill("blue");
        rect(700,650,100,20);
        fill("yellow");
        rect(740,575,20,170); */
        imageMode(CENTER);
        //fill(255,0,0);
        image(this.image,this.x,this.y,this.width,this.height);
    }
};