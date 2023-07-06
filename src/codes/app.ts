import { Code } from "./code";

class App {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    appWidth: number;
    appHeight: number;

    codes: Code[];

    constructor() {
        this.canvas = document.querySelector("canvas")!;
        this.ctx = this.canvas.getContext("2d")!;
        window.addEventListener("resize", this.resize.bind(this));

        this.init();
    }

    init() {
        this.resize();
        this.codes = [
            new Code(this.ctx, this.appWidth, this.appHeight),
            new Code(this.ctx, this.appWidth, this.appHeight),
            new Code(this.ctx, this.appWidth, this.appHeight),
            new Code(this.ctx, this.appWidth, this.appHeight),
            new Code(this.ctx, this.appWidth, this.appHeight),
            new Code(this.ctx, this.appWidth, this.appHeight),
            new Code(this.ctx, this.appWidth, this.appHeight),
            new Code(this.ctx, this.appWidth, this.appHeight),
            new Code(this.ctx, this.appWidth, this.appHeight),
            new Code(this.ctx, this.appWidth, this.appHeight),
            new Code(this.ctx, this.appWidth, this.appHeight),
            new Code(this.ctx, this.appWidth, this.appHeight),
            new Code(this.ctx, this.appWidth, this.appHeight),
            new Code(this.ctx, this.appWidth, this.appHeight),
        ];
        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.appWidth = document.body.clientWidth;
        this.appHeight = document.body.clientHeight;

        this.canvas.width = this.appWidth * 2;
        this.canvas.height = this.appHeight * 2;
        this.ctx.scale(2, 2);

        requestAnimationFrame(this.animate.bind(this));
    }

    animate() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.appWidth, this.appHeight);

        this.codes.forEach((code) => {
            code.draw(this.ctx);
        });

        setTimeout(() => {
            requestAnimationFrame(this.animate.bind(this));
        }, 100);
    }
}

window.addEventListener("load", () => new App());