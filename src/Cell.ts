import P5 from "p5";
import {Color} from "./Color";

export class Cell {
    readonly p5: P5
    readonly x: number
    readonly y: number
    readonly size: number
    color: Color

    constructor(x: number, y: number, size: number, p5: P5, color?: Color) {
        this.p5 = p5
        this.x = x
        this.y = y
        this.size = size
        this.color = color ?? new Color(255, 255, 255, p5)
    }

    show() {
        this.p5.fill(this.color.red, this.color.green, this.color.blue)
        this.p5.square(this.x, this.y, this.size)
    }
}