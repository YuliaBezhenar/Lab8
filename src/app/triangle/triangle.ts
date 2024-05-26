
import { Point } from './point';

export class Triangle {
    public color: string = "";
    public p1: Point = new Point(0, 0);
    public p2: Point = new Point(0, 0);
    public p3: Point = new Point(0, 0);

    constructor(p1: Point, p2: Point, p3: Point, color: string = "black") {
        this.color = color;
        this.p1 = p1;
        this.p2 = p2;
        this.p3 = p3;
    }

    move(dx: number, dy: number): void {
        this.p1.move(dx, dy);
        this.p2.move(dx, dy);
        this.p3.move(dx, dy);
    }

    rotate(angle: number, center: Point): void {
        this.p1 = this.p1.rotate(angle, center);
        this.p2 = this.p2.rotate(angle, center);
        this.p3 = this.p3.rotate(angle, center);
    }
    

    setColor(color: string): void {
        this.color = color;
    }

    resize(factor: number): void {
        this.p2.x *= factor;
        this.p2.y *= factor;
        this.p3.x *= factor;
        this.p3.y *= factor;
    }
}
    

export class IsoscelesTriangle extends Triangle {
    constructor(p1: Point, p2: Point, baseLength: number) {
        let p3 = new Point(p1.x + baseLength, p1.y);
        super(p1, p2, p3);
    }
}
    
    

export class EquilateralTriangle extends Triangle {
    constructor(p1: Point, sideLength: number) {
        let p2 = new Point(p1.x + sideLength, p1.y);
        let height = (Math.sqrt(3) / 2) * sideLength;
        let p3 = new Point(p1.x + sideLength / 2, p1.y + height);
        super(p1, p2, p3);
    }
}
    
