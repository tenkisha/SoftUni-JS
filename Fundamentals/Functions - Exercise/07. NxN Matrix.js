function nxnMatrix(a) {
    let sum = ' ';
    let counter = 0;
    for (let i = 0; i < a; i++) {
        counter++;
        sum += a + ' ';
        if (counter == a) {
            for (let j = 0; j < a; j++) {
                console.log(sum);
            }
        }
    }
}

nxnMatrix(3)