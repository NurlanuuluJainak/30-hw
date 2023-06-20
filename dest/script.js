"use strict";
const container = document.createElement("div");
container.className = 'container';
const containerBtn = document.createElement("div");
containerBtn.className = 'containerBtn';
const inputFirst = document.createElement("input");
inputFirst.type = 'number';
const inputSecond = document.createElement("input");
inputSecond.type = 'number';
const resultText = document.createElement("h1");
resultText.className = 'resultText';
const buttonPlus = document.createElement("button");
buttonPlus.innerText = "+";
buttonPlus.addEventListener('click', () => {
    const value = +inputFirst.value;
    const value2 = +inputSecond.value;
    const result = value + value2;
    resultText.innerText = `Result: ${result}`;
    inputFirst.value = '';
    inputSecond.value = '';
});
const buttonMinus = document.createElement("button");
buttonMinus.innerText = "-";
buttonMinus.addEventListener('click', () => {
    const value = +inputFirst.value;
    const value2 = +inputSecond.value;
    const result = value - value2;
    resultText.innerText = `Result: ${result}`;
    inputFirst.value = '';
    inputSecond.value = '';
});
const buttonDivision = document.createElement("button");
buttonDivision.innerText = "/";
buttonDivision.addEventListener('click', () => {
    const value = +inputFirst.value;
    const value2 = +inputSecond.value;
    const result = value / value2;
    resultText.innerText = `Result: ${result}`;
    inputFirst.value = '';
    inputSecond.value = '';
});
const buttonMultiplications = document.createElement("button");
buttonMultiplications.innerText = "*";
buttonMultiplications.addEventListener('click', () => {
    const value = +inputFirst.value;
    const value2 = +inputSecond.value;
    const result = value * value2;
    resultText.innerText = `Result: ${result}`;
    inputFirst.value = '';
    inputSecond.value = '';
});
containerBtn.append(buttonPlus, buttonDivision, buttonMinus, buttonMultiplications);
container.append(inputFirst, inputSecond, containerBtn, resultText);
document.body.append(container);