function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let newLine = ``;
        for (let j = 1; j <= i; j++) {
            newLine += i + " "
        }
        console.log(newLine)
    }
}

triangleOfNumbers(5)