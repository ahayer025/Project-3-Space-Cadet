/// PILLARS ///
class Pillar{
    constructor(offset=gap, color=[0,0,200]){
        this.offset = offset;
        this.color = color;
        this.x = (width/2)+this.offset
        this.name = "Pillar"
        this.size = 25
    }

    render(){
        push();
        translate(this.x, this.y)
        fill(...this.color);
        rect(this.x, 0, this.size, height);
        rect(this.x, 0, this.size, height);

        pop();
    }

    collide(otherX, otherY, radius){
        // console.log(`this.x: ${this.x}' this.y: ${this.y}' otherX: ${otherX}; otherY: ${otherY}`);
        let distance = dist(this.x, otherY, otherX, otherY);
        // console.log(this.offset, distance, otherY, this.size);
        // console.log(`Distatance: ${distance}; Radius: ${radius}`);

        if (distance < radius){
            return true;
        }
    }
}