class Mango{
    constructor(x,y,w,h){
        var options={
            isStatic: true,
            restitution: 0,
            friction: 1,
        }
        this.body=Bodies.rectangle(x,y,w,h,options)
        this.h=h
        this.w=w
        this.image=loadImage("mango.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.w,this.h)
        pop()
    }
    
}