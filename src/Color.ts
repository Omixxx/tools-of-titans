import P5 from "p5";

export class Color {
    private readonly p5: P5
    public red;
    public green;
    public blue;

    constructor(red: number, green: number, blue: number, p5: P5) {
        this.p5 = p5
        this.red = red
        this.green = green
        this.blue = blue
    }


    lighten(index: number) {
        this.red += index
        this.green += index
        this.blue += index
    }

    alterByMousePosition(objectX: number, objectY: number, initialColor: Color, finalColor: Color) {
        let objectVector = this.p5.createVector(objectX, objectY)
        let mouseVector = this.p5.createVector(this.p5.mouseX, this.p5.mouseY)
        let euclideanDistance = objectVector.dist(mouseVector)


        this.red = euclideanDistance + (finalColor.red - initialColor.red)
        this.green = euclideanDistance + (finalColor.green - initialColor.green)
        this.blue = euclideanDistance + (finalColor.blue - initialColor.blue)
    }
}