function solution(number) {
    function functionAdd(newNumber) {
        return number + newNumber;
    };
    return functionAdd;
}



let add5 = solution(5);

console.log(add5(2));

console.log(add5(3));