function sumNumbers(input) {
    let numbers = input[0]
    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        let currentDigit = Number(numbers[i]);
        sum += currentDigit

    }
    console.log(`The sum of the digits is:${sum}`)
}

sumNumbers(['1234'])