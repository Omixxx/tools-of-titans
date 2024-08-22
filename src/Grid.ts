import {Cell} from "./Cell";
import P5 from "p5";

export class Grid {
    private readonly p5: P5
    private readonly rows: number
    private readonly cols: number
    private readonly cellSize: number

    private cells: Array<Cell>[]
    private firstCellX: number
    private firstCellY: number

    constructor(rows: number, cols: number, cellSize: number, p5: P5) {
        this.p5 = p5
        this.firstCellX = 0
        this.firstCellY = 0
        this.rows = rows
        this.cols = cols
        this.cellSize = cellSize
        this.cells = this.makeGrid(rows, cols, cellSize)
    }

    private makeGrid(rows: number, cols: number, size: number) {
        let array = new Array<Array<Cell>>(rows)
        for (let i = 0; i < rows; i++) {
            array[i] = new Array<Cell>(cols)
            for (let j = 0; j < cols; j++) {
                // @ts-ignore
                array[i][j] = new Cell((this.firstCellX + (size * j)), this.firstCellY + (size * i), size, this.p5)
            }
        }
        return array
    }

    public getCells() {
        return this.cells
    }

    public center() {
        this.firstCellX = this.p5.floor(this.p5.width / 2) - this.p5.floor((this.cellSize * this.rows) / 2)
        this.firstCellY = this.p5.floor(this.p5.height / 2) - this.p5.floor((this.cellSize * this.cols) / 2)
        this.cells = this.makeGrid(this.rows, this.cols, this.cellSize)
    }

}