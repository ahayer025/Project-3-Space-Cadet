class Obstacle{
    constructor(side=1, size=30){
        this.y = 0;
        this.size = size;
        switch (side){
            case -1:
                this.x = -100;
            case 0:
                this.x = pillarLeft.x+size-5;
                console.log(this.x);
                break;
            case 1:
                this.x = pillarRight.x;
                this.size*=-1;
                console.log(this.x);
                break;
        }
        this.name = "Obstacle";
        this.speed = 10;
        this.frameStart = 0;
    }

    render(){
        push();
        translate(this.x, this.y);
        fill(255);
        triangle(this.size, 0, 0, plr.radius/2, 0, -plr.radius/2);
        pop();
        if (this.frameStart == 0){
            this.frameStart = frameCount;
        }
    }

    move(){
        if (this.y < height+abs(this.size)){
            this.y+=this.speed;
        } else {
            console.log(`frameCount: ${frameCount}`)
            console.log(`this.frameStart: ${this.frameStart}`)
            console.log(`Frame appeared: ${frameCount-this.frameStart}`);
            obstacles.splice(obstacles.indexOf(this), 1);
        }
        // console.log(`Obs: ${this.x}`)
    }

    collide(otherX, otherY, radius){
        // console.log(`this.x: ${this.x}' this.y: ${this.y}' otherX: ${otherX}; otherY: ${otherY}`);
        let distance = dist(this.x, this.y, otherX, otherY);
        // console.log(`Distatance: ${distance}; Radius: ${radius}`);

        if (distance < radius){
            return true;
        }
    }
}