class Paper {
    constructor(){
        var Options={
            restitution:0.8,
            density:1
        }
        this.body=Bodies.circle(50,100,20,Options)
        World.add(world,this.body)
        this.image=loadImage("paper.png")
    }
    display(){
        imageMode(CENTER)
         image(this.image,this.body.position.x,this.body.position.y,25,25)
       
    }
}