// Задача 1

const invalidNumber = new Error("Невалидное значение");

function parseCount(n) {
    let parsed = Number.parseInt(n, 10);
    if (isNaN(parsed)) {
        throw invalidNumber;
    }
    return parsed;
}

function validateCount(n) {
    try {
        parseCount(n);
    }
    catch(e) {
        throw invalidNumber;
    }

    return parseCount(n);
}

// Задача 2
const triangleError = new Error("Треугольник с такими сторонами не существует");
class Triangle {
    constructor(a, b, c) {
    if (a + b < c || a + c < b || b + c < a) {
        throw triangleError
    }
    else {
    this.a = a;
    this.b = b;
    this.c = c;
    this.perimeter = a + b + c;
    this.area = Math.sqrt(this.perimeter / 2 * (this.perimeter / 2 - a) * (this.perimeter / 2 - b) * (this.perimeter / 2 - c));
    }
}
    getPerimeter() {
        return this.perimeter;
    }

    getArea() {
        return this.area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try { 
        return new Triangle(a, b, c);
    }
    catch(e) {
        return {
        getPerimeter: () => 'Ошибка! Треугольник не существует!',
        getArea: () => 'Ошибка! Треугольник не существует!'
    }
}
}