function prevDay(year, month, day) {
  let prevDay = new Date(year, month, day).getDate() - 1;
  if (prevDay === 0) {
    month -= 1;
    prevDay = new Date(year, month, prevDay).getDate();
  }
  console.log(`${year}-${month}-${prevDay}`);
}

prevDay(2016, 9, 30);
