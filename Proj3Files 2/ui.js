let buChar

/// UI ///
class Button{
    constructor(txtString, x, y){
        this.txtString = txtString;
        this.x = x;
        this.y = y;
        this.length = 100;
        this.height = 50;
    }

    render(){
        push();
        translate(this.x, this.y);
        textAlign(CENTER);
        rectMode(CENTER);
        text(this.txtString, 0, 0);
        noFill()
        stroke(255);
        rect(0, 0, this.length, this.height)
        pop();
    }

}