class RubberBand {
    constructor (bodyA,bodyB){
        var options = {
            bodyA:bodyA, 
            bodyB:bodyB,
            length: 2,
            stiffness: 0.1
        }
        this.band = Matter.Constraint.create(options)
    World.add(world,this.band)
    }

    display(){
        var pointA = this.band.bodyA.position 
        var pointB = this.band.bodyB.position 
        strokeWeight (4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}