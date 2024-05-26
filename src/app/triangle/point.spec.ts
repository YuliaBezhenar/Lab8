
import { Point } from './point';

describe('Point', () => {
    it('should create a point with given coordinates', () => {
        const point = new Point(1, 2);
        expect(point.x).toBe(1);
        expect(point.y).toBe(2);
    }); 

    it('should move the point by given dx and dy', () => {
        const point = new Point(1, 2);
        point.move(3, 4);
        expect(point.x).toBe(4);
        expect(point.y).toBe(6);
    });
    it('should rotate the point around a given center by a given angle', () => {
        let p = new Point(2, 3);
        let center = new Point(1, 1);
        let rotatedPoint = p.rotate(90, center); // Rotate by 90 degrees around (1, 1)

        expect(rotatedPoint.x).toBeCloseTo(3); // new x-coordinate
        expect(rotatedPoint.y).toBeCloseTo(0);  // new y-coordinate
    });
    
    
});
