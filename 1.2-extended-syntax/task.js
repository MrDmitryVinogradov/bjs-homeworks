"use strict";
function getResult(a,b,c) {
   
    // код для задачи №1 писать здесь
    let discriminant = Math.pow (b , 2) - 4 * a * c;
    let x = [];
    if (discriminant > 0) {
        x[0] = (-b + Math.sqrt(discriminant)) / (2 * a);
        x[1] = (-b - Math.sqrt(discriminant)) / (2 * a);
    }
    else if (discriminant === 0) {
        x[0] = -b / (2 * a);
    }
    else {
       x = [];
       alert('нет корней!');
    }

    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let averageMark;
    let len = marks.length;
    let sumOfMarks = 0;
    if (len === 0) {
        averageMark = 0;
    } 
    else {
        marks.splice(5);
        len = marks.length;
        for (let i = 0; i < len; i++) {
            sumOfMarks = sumOfMarks + marks[i];
        }
        averageMark = sumOfMarks / len;
    }
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let result;
    if (new Date().getFullYear() - dateOfBirthday.getFullYear() > 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`
    }
    else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`
    }
    return result;
}