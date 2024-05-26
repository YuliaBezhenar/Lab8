
import { Point } from './point';
import { Triangle, IsoscelesTriangle, EquilateralTriangle } from './triangle';

describe('Triangle', () => {
    it('Створення трикутника за точками', () => {
        let p1 = new Point(0, 0);
        let p2 = new Point(1, 0);
        let p3 = new Point(0, 1);
        let triangle = new Triangle(p1, p2, p3);
        expect(triangle.p1).toBe(p1);
        expect(triangle.p2).toBe(p2);
        expect(triangle.p3).toBe(p3);
    });
    it('Створення рівнобедреного трикутника', () => {
        let p1 = new Point(0, 0);
        let p2 = new Point(2, 0);
        let baseLength = 2;
        let triangle = new IsoscelesTriangle(p1, p2, baseLength);
        //Чи має створений трикутник правильні точки
        expect(triangle.p1).toBe(p1);
        expect(triangle.p2).toBe(p2);
        
        expect(Math.abs(triangle.p3.x - p1.x)).toBe(baseLength);
    });
    

    it('Створення рівностороннього трикутника', () => {
        let p1 = new Point(0, 0);
        let sideLength = 2;
        let triangle = new EquilateralTriangle(p1, sideLength);
        //Чи має створений трикутник правильно задану точку
        expect(triangle.p1).toBe(p1);
        //Чи правильна довжина сторони рівностороннього трикутника
        expect(Math.abs(triangle.p2.x - p1.x)).toBeCloseTo(sideLength);
        //Перевірика велечини висоти трикутника
        expect(Math.abs(triangle.p3.y - p1.y)).toBeCloseTo((Math.sqrt(3) / 2) * sideLength);
    });
    

    it('Переміщення трикутника', () => {
        let p1 = new Point(0, 0);
        let p2 = new Point(1, 0);
        let p3 = new Point(0, 1);
        let triangle = new Triangle(p1, p2, p3);
        triangle.move(2, 3);
        expect(triangle.p1.x).toBe(2);
        expect(triangle.p1.y).toBe(3);
        expect(triangle.p2.x).toBe(3);
        expect(triangle.p2.y).toBe(3);
        expect(triangle.p3.x).toBe(2);
        expect(triangle.p3.y).toBe(4);
    });

    it('Обертання трикутника навколо точки із заданим кутом', () => {
        let p1 = new Point(1, 1);
        let p2 = new Point(2, 1);
        let p3 = new Point(1, 2);
        let center = new Point(1, 1);
        let triangle = new Triangle(p1, p2, p3);
        triangle.rotate(90, center);

        expect(triangle.p1.x).toBeCloseTo(1);
        expect(triangle.p1.y).toBeCloseTo(1);
        expect(triangle.p2.x).toBeCloseTo(1);
        expect(triangle.p2.y).toBeCloseTo(0);
        expect(triangle.p3.x).toBeCloseTo(2);
        expect(triangle.p3.y).toBeCloseTo(1);
    });
    
    it('Зміна кольору трикутника', () => {
        let p1 = new Point(0, 0);
        let p2 = new Point(1, 0);
        let p3 = new Point(0, 1);
        let triangle = new Triangle(p1, p2, p3);
        triangle.setColor('red');
        expect(triangle.color).toBe('red');
    });

    it('Зміна розміру трикутника', () => {
        let p1 = new Point(0, 0);
        let p2 = new Point(1, 0);
        let p3 = new Point(0, 1);
        let triangle = new Triangle(p1, p2, p3);
        triangle.resize(2); // Resize by a factor of 2
        expect(triangle.p2).toEqual(new Point(2, 0));
        expect(triangle.p3).toEqual(new Point(0, 2));
    });



});
