// Задача 1
function parseCount(n) {
    let parsed = Number.parseInt(n, 10);
    if (isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed;
}

function validateCount(n) {
    try {
        return parseCount(n);
    }
    catch (e) {
        return e;
    }
}

// Задача 2
class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let area = Math.sqrt(this.getPerimeter() / 2 * (this.getPerimeter() / 2 - this.a) * (this.getPerimeter() / 2 - this.b) * (this.getPerimeter() / 2 - this.c))
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch (e) {
        return {
            getPerimeter: () => {
                return 'Ошибка! Треугольник не существует';
            },
            getArea: () => {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}