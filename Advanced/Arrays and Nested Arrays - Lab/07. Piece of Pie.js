function pie(arr, start, finish) {
  return arr.slice(arr.indexOf(start), arr.indexOf(finish) + 1);
}

console.log(
  pie(
    [
      "Pumpkin Pie",
      "Key Lime Pie",
      "Cherry Pie",
      "Lemon Meringue Pie",
      "Sugar Cream Pie",
    ],
    "Key Lime Pie",
    "Lemon Meringue Pie"
  )
);
