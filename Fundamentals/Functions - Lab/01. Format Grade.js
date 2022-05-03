function grade(grades) {
  if (grades < 3.0) {
    console.log(`Fail (${grades.toFixed(2)})`);
  } else if (grades >= 3.0 && grades <= 3.49) {
    console.log(`Poor (${grades.toFixed(2)})`);
  } else if (grades >= 3.5 && grades <= 4.49) {
    console.log(`Good (${grades.toFixed(2)})`);
  } else if (grades >= 4.5 && grades <= 5.49) {
    console.log(`Very good (${grades.toFixed(2)})`);
  } else if (grades >= 5.5) {
    console.log(`Excellent (${grades.toFixed(2)})`);
  }
}

grade(5.5);
