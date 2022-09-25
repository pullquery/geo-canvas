import { Func } from "./types";

export class Graph {
    graphWidth: number;
    graphHeight: number;
    centerX: number;
    centerY: number;

    cur: number;
    speed: number;

    min: number;
    max: number;

    func: Func;
    color: string;
    zoom: number;

    constructor(func: Func, color: string, zoom: number) {
        this.speed = 0.05;

        this.func = func;
        this.color = color;
        this.zoom = zoom;
    }

    size(width: number, height: number) {
        this.graphWidth = width;
        this.graphHeight = height;
        this.centerX = this.graphWidth / 2;
        this.centerY = this.graphHeight / 2;

        this.min = this.centerX / this.zoom * -1;
        this.max = this.centerY / this.zoom;
        this.cur = this.min;

        console.log(this.min, this.max);
    }

    drawPlane(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.graphWidth, this.graphHeight);

        ctx.strokeStyle = "white";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(0, this.centerY);
        ctx.lineTo(this.graphWidth, this.centerY);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(this.centerX, 0);
        ctx.lineTo(this.centerX, this.graphHeight);
        ctx.stroke();
        ctx.closePath();
    }

    drawGraph(ctx: CanvasRenderingContext2D) {
        this.cur += this.speed;
        console.log(this.cur);

        ctx.beginPath();
        ctx.arc(
            this.centerX + this.cur * this.zoom,
            this.centerY - this.func(this.cur) * this.zoom,
            1, 0, Math.PI * 2
        );
        ctx.closePath();

        ctx.fillStyle = this.color;
        ctx.fill();

        if (this.cur > this.max) {
            this.cur = this.min;
            this.drawPlane(ctx);
        }
    }

}