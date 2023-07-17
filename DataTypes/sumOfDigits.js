function sumOfDigits(number){
    let sum = 0;

    let stringNumber = String(number);

    for(let i = 0; i < stringNumber.length; i++){
        sum += parseInt(stringNumber[i], 10);
    }
    console.log(`The sum of digits of ${number} is ${sum}`);
}

sumOfDigits(12345);
sumOfDigits(1234567890);
sumOfDigits(7777);
sumOfDigits(800);