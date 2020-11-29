class Dustbin {
    constructor(){
        var Options={
            isStatic:true
        }
        this.bodyc=Bodies.rectangle(377,373,50,5,Options)
        this.bodyl=Bodies.rectangle(350,350,5,50,Options)
        this.bodyr=Bodies.rectangle(400,350,5,50,Options)
        this.image=loadImage("dustbingreen.png")
    
        World.add(world,this.bodyc)
        World.add(world,this.bodyr)
        World.add(world,this.bodyl)
    }
   display(){
      imageMode(CENTER)
       image(this.image,this.bodyc.position.x,this.bodyc.position.y,150,80)
    
       
   }
}