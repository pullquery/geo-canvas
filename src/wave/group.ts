import { Wave } from "./wave";

export class Group {
    colors: string[];

    waves: Wave[];
    length: number;

    constructor() {
        this.colors = ["#ff000080", "#00ff0080", "#0000ff80"];
        this.length = 3;

        this.waves = [];
        for (let i = 0; i < this.length; ++i) {
            this.waves[i] = new Wave(i, this.colors[i]);
        }
    }

    resize(width: number, height: number) {
        for (let i = 0; i < this.length; ++i) {
            this.waves[i].resize(width, height);
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (let i = 0; i < this.length; ++i) {
            this.waves[i].draw(ctx);
        }
    }
}