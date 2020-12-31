class Box{
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width
        this.height = height
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position 
        push()
        var angle = this.body.angle
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        fill("yellow")
        strokeWeight(5)
        rect(0,0,this.width,this.height);
        pop();
    }
}