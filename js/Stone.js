class stone  {
    constructor(x,y,w,h) {
        let options={
           restitution:0.8
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.w=w
        this.h=h
        
        World.add(world,this.body)
    }
    show(){
        let pos=this.body.position
        push()
        translate(pos.x,pos.y)
        strokeWeight(1)
        ellipseMode(CENTER)
        fill("white")
        ellipse(0,0,this.w,this.h)
        pop()
    }
}