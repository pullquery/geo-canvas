import { Graph } from "./graph";
import { Func } from "./types";

class App {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;

    appWidth: number;
    appHeight: number;

    funcs: Func[];
    colors: string[];
    graphs: Graph[];

    constructor() {
        this.canvas = document.querySelector("canvas")!;
        this.ctx = this.canvas.getContext("2d")!;
        window.addEventListener("resize", this.size.bind(this));

        this.init();
    }

    init() {
        /* Initial Code */
        this.funcs = [
            (x) => Math.sin(x),
            (x) => Math.cos(x),
            (x) => Math.tan(x),
        ];

        this.colors = [
            "#ff0000",
            "#00ff00",
            "#0000ff",
            "#ffff00",
            "#ff00ff",
            "#00ffff"
        ];

        this.graphs = [];
        this.funcs.forEach((func, i) => {
            this.graphs[i] = new Graph(func, this.colors[i], 75);
        });

        this.size();

        requestAnimationFrame(this.animate.bind(this));
    }

    size() {
        this.appWidth = document.body.clientWidth;
        this.appHeight = document.body.clientHeight;

        this.canvas.width = this.appWidth * 2;
        this.canvas.height = this.appHeight * 2;
        this.ctx.scale(2, 2);

        /* Resize Code */
        this.graphs.forEach(graph => {
            graph.size(this.appWidth, this.appHeight);
            graph.drawPlane(this.ctx);
        });
    }

    animate() {
        /* Animate Code */
        this.graphs.forEach(graph => {
            graph.drawGraph(this.ctx);
        });

        requestAnimationFrame(this.animate.bind(this));
    }
}

window.addEventListener("load", () => new App());