import { Func } from "./types";

export class Graph {
    graphWidth: number;
    graphHeight: number;
    centerX: number;
    centerY: number;

    min: number;
    max: number;

    func: Func;
    color: string;
    zoom: number;
    speed: number;
    x: number;

    constructor(func: Func, color: string, zoom: number, speed: number) {
        this.func = func;
        this.color = color;
        this.zoom = zoom;
        this.speed = speed;
    }

    size(width: number, height: number) {
        this.graphWidth = width;
        this.graphHeight = height;
        this.centerX = this.graphWidth / 2;
        this.centerY = this.graphHeight / 2;

        this.min = this.centerX / this.zoom * -1;
        this.max = this.centerX / this.zoom;
        this.x = this.min;
    }

    drawPlane(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, this.graphWidth, this.graphHeight);

        ctx.strokeStyle = "white";
        ctx.lineWidth = 1;

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
        this.x += this.speed;

        ctx.beginPath();
        ctx.arc(
            this.centerX + this.x * this.zoom,
            this.centerY - this.func(this.x) * this.zoom,
            1, 0, Math.PI * 2
        );
        ctx.closePath();

        ctx.fillStyle = this.color;
        ctx.fill();

        if (this.x > this.max) {
            this.x = this.min;
            this.drawPlane(ctx);
        }
    }

}