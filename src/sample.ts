class Sample {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    appWidth: number;
    appHeight: number;

    constructor() {
        this.canvas = document.querySelector("canvas")!;
        this.ctx = this.canvas.getContext("2d")!;
        window.addEventListener("resize", this.resize.bind(this));

        this.init();
    }

    init() {
        this.resize();
        /* Initial Code Here */
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
        this.ctx.clearRect(0, 0, this.appWidth, this.appHeight);
        /* Animate Code Here */
        requestAnimationFrame(this.animate.bind(this));
    }
}

window.addEventListener("load", () => new Sample());