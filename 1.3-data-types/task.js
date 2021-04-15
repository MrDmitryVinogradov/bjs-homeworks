"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
    // код для задачи №1 писать здесь
    let totalAmount = 0;
    let now = new Date();
    if (+percent < 0 || isNaN(+percent)) {
        return `Параметр \"Процентная ставка\" содержит неправильное значение ${percent}`; 
    }
    if (+contribution < 0 || isNaN(+contribution)) {
        return `Параметр \"Начальный взнос\" содержит неправильное значение ${contribution}`; 
    }
    if (+amount < 0 || isNaN(+amount)) {
        return `Параметр \"Общая стоимость\" содержит неправильное значение ${amount}`; 
    }
    if (+date <= +now) { 
        return `Параметр \"Срок ипотеки\" содержит неправильное значение ${date}`;
    }
    if (date === "undefined" || isNaN(date)) {
        return "Введите дату";
    } 
    let months = (date.getFullYear() - now.getFullYear()) * 12 + (date.getMonth() - now.getMonth());
    let loanSum = amount - contribution;
    percent = percent / 100;
    let monthPercent = percent / 12; 
    let payment = loanSum * (monthPercent + monthPercent / (Math.pow(1 + monthPercent, months) - 1));
    totalAmount = payment * months;
    console.log(totalAmount.toFixed(2));
    return totalAmount.toFixed(2);

}
function getGreeting(name) {
    // код для задачи №2 писать здесь
    name = name.trim();
    if (!name) {
        name = "Аноним";
    }
    let greeting = `Привет, мир! Меня зовут ${name}!`;
    console.log(greeting);
    return greeting;
}