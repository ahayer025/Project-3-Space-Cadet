/// PLAYER STUFF ///
class Player{
    constructor(x=width/2, y=height-(height/10)){
        this.x = x;
        this.y = y;
        this.radius = 35;
        this.speed = 30
        this.direction = this.speed;
        this.name = "Player"
        this.skin = imgPlr
    }

    render(){
        if (alive){
            push();
            translate(this.x, this.y);
            fill(0);
            // square(0, 0, this.radius);
            image(this.skin, 0-this.radius/2+13, 0, this.radius, this.radius)
            pop();
            // console.log(`Image: ${this.x-this.radius/2}`)
            // console.log(`Player: ${this.x}`)
        }
    }

    jumpRight(){
        if (keyIsDown(RIGHT_ARROW)){
            // if (pillarRight.collide(this.x, this.y, this.radius)){
            //     console.log("Away")
            //     this.x++;
            // }
            this.direction = abs(this.speed);
        }
    }

    jumpLeft(){
        if (keyIsDown(LEFT_ARROW)){
            this.direction = -this.speed;
            // if (pillarLeft.collide(this.x, this.y, this.radius)){
            //     console.log("Away")
            //     this.x--;
            // }
        }
    }

    move(){
        if (this.direction >= 0){
            if (!pillarRight.collide(this.x, this.y, this.radius)){
                this.x+=this.direction;
                if (pillarRight.collide(this.x, this.y, this.radius)){
                    this.x = pillarRight.x-(pillarRight.size/2)-(this.radius/2)-1
                }
            } 
            // if (this.x < pillarRight.x-50){
            //     this.x+=this.direction;
            //     console.log(this.x)
            // } else {
            //     this.x = pillarRight.x-this.radius;
            // }
        }

        if (this.direction < 0){
            if (!pillarLeft.collide(this.x, this.y, this.radius)){
                this.x+=this.direction;
                if (pillarLeft.collide(this.x, this.y, this.radius)){
                    this.x = pillarLeft.x+(pillarLeft.size/2)+(this.radius/2)+2
                }
            }
        }

        // if (!pillarLeft.collide(this.x, this.y, this.radius) && !pillarRight.collide(this.x, this.y, this.radius)){
        //     this.x+=this.direction;
        // }
    }

    collide(){
        for (let i=0; i < obstacles.length; i++){
            if (obstacles[i].collide(this.x, this.y, this.radius)){
                // console.log("this:" + str(this));
                // console.log("index:" + str(toRender.indexOf(this)))
                // console.log("spliced:" + str(toRender.splice(toRender.indexOf(this), 1)));
                // this.x = -100;
                // this.y = -100;
                alive = false;
                audSong1.stop();
            }
        }
    }
}