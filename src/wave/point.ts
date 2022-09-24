export class Point {
    x: number;
    y: number;
    center: number;

    speed: number;
    cur: number;
    max: number;

    constructor(index: number, x: number, y: number) {
        this.x = x;
        this.y = y;
        this.center = y;

        this.speed = 0.075;
        this.cur = index;
        this.max = Math.random() + 100;
    }

    update() {
        this.cur += this.speed;
        this.y = this.center + Math.sin(this.cur) * this.max;
    }
}