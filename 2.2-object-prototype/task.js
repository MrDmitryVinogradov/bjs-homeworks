String.prototype.isPalindrome = function () {
    let string = this;
    let orderedLetters = [];
    string = string.toLowerCase();
    orderedLetters = string.split('');
    let len = orderedLetters.length;
    let reversedLetters = [];

    for (i = 0; i < len; i++) {
        if (orderedLetters[i] === " ") {
            orderedLetters.splice(i, 1);
        }
    }
    len = orderedLetters.length;
    for (i = 0; i < len; i++) {
        reversedLetters.unshift(orderedLetters[i]);
    }
    let result = true;;
    for (i = 0; i < len; i++) {
if (orderedLetters[i] != reversedLetters[i]) {
    result = false;
    return result
}
}
return result
}


function getAverageMark(marks) {
    len = marks.length;
    let sumOfMarks = 0;
    let average;
    for (i = 0; i < len; i++) {
    sumOfMarks += marks[i];
    }
    average = sumOfMarks / len;
    result = Math.round(average);
    return result
}

function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}