'use strict'

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let answer_1 = prompt("Введите обязательную статью расходов в этом месяце"),
    answer_2 = prompt("Во сколько это обойдется");

let appData = {
    moneyMonth: money,
    timeData:  time,
    expenses: {
        answer_1, answer_2
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

let moneyDay = (money - appData.expenses.answer_2) / 30;
alert(moneyDay);




