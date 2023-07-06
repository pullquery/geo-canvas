export class Code {
    fontSize: number;
    x: number;
    yEnd: number;
    yStart: number;

    fontWidth: number;
    widthShare: number;
    widthReminder: number;

    fontHeight: number;
    heightMargin: number;
    heightShare: number;
    heightReminder: number;

    constructor(ctx: CanvasRenderingContext2D, width: number, height: number) {
        this.fontSize = 35;
        ctx.font = `${this.fontSize}px monospace`;
        const metrics = ctx.measureText("X");

        this.fontWidth = metrics.width;
        this.widthShare = Math.floor(width / this.fontWidth);
        this.widthReminder = width % this.fontWidth;

        this.heightMargin = 10;
        this.fontHeight = metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent + this.heightMargin;
        this.heightShare = Math.floor(height / this.fontHeight);
        this.heightReminder = height % this.fontHeight;

        this.init();
    }

    init() {
        this.x = this.fontWidth * Math.floor(Math.random() * this.widthShare) + this.widthReminder / 2; // random

        this.yStart = Math.floor(Math.random() * this.heightShare); // random
        this.yEnd = Math.floor(Math.random() * this.yStart); // index
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (let i = this.yEnd; i > this.yStart; --i) {
            const alpha = 1 - 1 / this.yEnd * (this.yEnd - i);
            if (alpha <= 0) {
                this.init();
            }

            ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`;

            if (i <= this.yEnd) {
                const height = this.fontHeight * i + this.heightReminder / 2 - this.heightMargin / 2;
                ctx.fillText("キ", this.x, height);
            }
        }

        this.yEnd++;
    }
}