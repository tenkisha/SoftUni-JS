function requiredReading(numOfPages, pagesIn1Hour, days) {
  let hoursPerDay = numOfPages / pagesIn1Hour / days;
  console.log(hoursPerDay);
}

requiredReading(212, 20, 2);
