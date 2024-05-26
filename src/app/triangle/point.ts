
export class Point {
    constructor(public x: number, public y: number) { }

    move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }

    rotate(angle: number, center: Point): Point {
        let radians = (Math.PI / 180) * angle;
        let cos = Math.cos(radians);
        let sin = Math.sin(radians);
        let x = center.x + (this.x - center.x) * cos + (this.y - center.y) * sin; // зміна знаку у цьому рядку
        let y = center.y - (this.x - center.x) * sin + (this.y - center.y) * cos; // зміна знаку у цьому рядку
        return new Point(x, y);
    }
    
    
}
