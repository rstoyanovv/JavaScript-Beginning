// Task1
function charToString(char1, char2, char3) {
    let str = "";
    str = char1 + char2 + char3;
    console.log(`The string of ${char1}, ${char2} and ${char3} is ${str}.`);
}

console.log("Task 1: ");
charToString('a', 'b', 'c');
charToString('s', '2', '#');

//Task2
function reverseCharacters(char1, char2, char3) {
    console.log(`${char3} ${char2} ${char1}`);
}

console.log("----------------");
console.log("Task 2: ");
reverseCharacters('a', 'b', 'c');
reverseCharacters('L', '#', '2');

//Task3 
function lowerOrUpper(char){
    if(char>='a' && char<='z'){
        console.log(`${char} is lower-case.`);
    } else{
        if(char>='A' && char<='Z'){
        console.log(`${char} is upper-case.`);
        } else{
        console.log(`${char} is invalid value.`);
        }
    }
}

console.log("----------------");
console.log("Task 3: ");
lowerOrUpper('a');
lowerOrUpper('5');
lowerOrUpper('F');

//Task4 
function calculate(num1, operator, num2){
    let result = 0;
    switch(operator){
        case '+':
            result = (num1 + num2).toFixed(2);
            console.log(`${num1} + ${num2} = ${result}`);
            break;
        case '-':
            result = (num1 - num2).toFixed(2);
            console.log(`${num1} - ${num2} = ${result}`);
            break;
        case '*':
            result = (num1 * num2).toFixed(2);
            console.log(`${num1} * ${num2} = ${result}`);
            break;
        case '/':
            result = (num1 / num2).toFixed(2);
            console.log(`${num1} / ${num2} = ${result}`);
            break;
        default:
            console.log(`${operator} is invalid operator`);
            break;
    }
}
console.log("----------------");
console.log("Task 4: ");
calculate(5, '+', 2);
calculate(5, '-', 2);
calculate(5, '*', 2);
calculate(5, '/', 2);
calculate(5, '%', 2);

//Task5:
function nextDate(year, month, day) {
    let date = new Date(year, month - 1, day);
    let nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    let nextYear = nextDate.getFullYear();
    let nextMonth = nextDate.getMonth() + 1;
    let nextDay = nextDate.getDate();
    console.log(`${nextYear} - ${nextMonth} - ${nextDay}`);
}
console.log("----------------");
console.log("Task 5: ");
nextDate(2022, 6, 3);
nextDate(2020, 9, 30);
