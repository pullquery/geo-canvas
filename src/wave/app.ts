import { Group } from "./group";

class App {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    appWidth: number;
    appHeight: number;

    group: Group;

    constructor() {
        this.canvas = document.querySelector("canvas")!;
        this.ctx = this.canvas.getContext("2d")!;

        this.group = new Group();

        window.addEventListener("resize", this.resize.bind(this));
        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        this.appWidth = document.body.clientWidth;
        this.appHeight = document.body.clientHeight;

        this.canvas.width = this.appWidth * 2;
        this.canvas.height = this.appHeight * 2;
        this.ctx.scale(2, 2);

        this.group.resize(this.appWidth, this.appHeight);
    }

    animate() {
        this.ctx.clearRect(0, 0, this.appWidth, this.appHeight);

        this.group.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }
}

window.addEventListener("load", () => new App());