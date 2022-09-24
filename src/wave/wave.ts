import { Point } from "./point";

export class Wave {
    waveWidth: number;
    waveHeight: number;

    centerX: number;
    centerY: number;

    index: number;

    color: string;
    points: Point[];
    length: number;
    gap: number;

    constructor(index: number, color: string) {
        this.index = index;
        this.color = color;
        this.points = [];
        this.length = 7;
    }

    resize(width: number, height: number) {
        this.waveWidth = width;
        this.waveHeight = height;

        this.centerX = this.waveWidth / 2;
        this.centerY = this.waveHeight / 2;

        this.gap = this.waveWidth / (this.length - 1);

        this.init();
    }

    init() {
        for (let i = 0; i < this.length; ++i) {
            this.points[i] = new Point(this.index + i, this.gap * i, this.centerY);
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;
        ctx.moveTo(prevX, prevY);

        for (let i = 0; i < this.length; ++i) {
            const cx = (prevX + this.points[i].x) / 2;
            const cy = (prevY + this.points[i].y) / 2;

            ctx.quadraticCurveTo(prevX, prevY, cx, cy);
            prevX = this.points[i].x;
            prevY = this.points[i].y;

            if (i != 0 && i != this.length - 1) {
                this.points[i].update();
            }
        }

        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.waveWidth, this.waveHeight);
        ctx.lineTo(0, this.waveHeight);
        ctx.lineTo(this.points[0].x, this.points[0].y);

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.closePath();

    }
};