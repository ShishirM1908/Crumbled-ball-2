class Ground {
    constructor(){
        var Options={
            isStatic:true
        }
        this.body=Bodies.rectangle(400,400,800,5,Options)
        World.add(world,this.body)
    }
   display(){
       rect(this.body.position.x,this.body.position.y,800,5)
   }
}