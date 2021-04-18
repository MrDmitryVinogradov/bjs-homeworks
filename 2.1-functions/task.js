// Задача 1

function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let solutions = {};
    if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a); 
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        solutions = {
            D: D,
            roots: [x1, x2]
        }
    }
    if (D === 0) {
        x1 = -b / (2 * a);
        solutions = {
            D: D,
            roots: [x1],
    }
}

    if (D < 0) {
        solutions = {
            D: D,
            roots:[],
    }
}
    console.log(solutions);
    return solutions;
}

function showSolutionsMessage(a, b, c) {
    result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней');
    }
    if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots[0]}`);
    }
    if (result.D > 0) {
        console.log(`Уравнение имеет два корня X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
    }
}

// Задача 2
function getAverageMark(marks) {
    let sumOfMarks = 0;
    let averageMark = 0;
    let len = marks.length;
    for (let i = 0; i < len; i++) {
        sumOfMarks = sumOfMarks + marks[i];
    }
    if (len > 0) {
    averageMark = sumOfMarks / len;
    }
    if (len === 0) {
        averageMark = 0;
    }
    return averageMark;
}

function getAverageScore(data) {
    let sumOfaverageMarks = 0;
    let counter = 0;
for (let prop in data) {
    value = data[prop];
    let averageForSubject = getAverageMark(value);
    data[prop] = averageForSubject;
    counter += 1;
    sumOfaverageMarks = sumOfaverageMarks + averageForSubject;
}
for (let prop in data){ 
    if (data[prop] === 0) {
        data.average = 0;
        console.log(data);
        return data;
    }
}
    let averageScore = sumOfaverageMarks / counter;
    data.average = averageScore;
    console.log(data);
}

// Задача 3

function getDecodedValue(secret) {
    if (secret === 0) {
        secret = "Родриго";
    }
    if (secret === 1) {
        secret = "Эмильо";
    }
    return secret;
}
function getPersonalData(secretData) {
    for (let prop in secretData) {
        let decodedValue = getDecodedValue(secretData[prop]);
        secretData[prop] = decodedValue;
        if (prop == "aaa"){
            console.log(`first name: ${decodedValue}`);
        } 
        if (prop == "bbb") {
            console.log(`last name: ${decodedValue}`);
        }
    }
}
