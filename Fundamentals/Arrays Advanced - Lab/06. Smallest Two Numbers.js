function smallestNumbers(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(" ");
}

console.log(smallestNumbers([30, 15, 50, 5]));
