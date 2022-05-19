function string(el1, el2, el3) {
  let sum = el1.length + el2.length + el3.length;
  let calc = sum / 3;

  console.log(sum);
  console.log(Math.floor(calc));
}

string("chocolate", "ice cream", "cake");
