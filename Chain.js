class Chain{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
        pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.Sling = Constraint.create(options)
        World.add(world,this.Sling)
    }
    display(){
        var pointA=this.Sling.bodyA.position
        var pointB=this.Sling.bodyB.position
        strokeWeight(3)
      var anchor1x=pointA.x
      var anchor1y=pointA.y
      var anchor2x=pointB.x+this.offsetX
      var anchor2y=pointB.x+this.offsetY
      line(anchor1x,anchor1y,anchor2x,anchor2y)
}}