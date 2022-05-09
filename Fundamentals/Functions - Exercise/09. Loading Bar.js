function loadingBar(number) {
  if (number == 0) {
    console.log(`${number}% [..........] 
  Still loading...`);
  } else if (number == 10) {
    console.log(`${number}% [%.........] 
  Still loading...`);
  } else if (number == 20) {
    console.log(`${number}% [%%........] 
  Still loading...`);
  } else if (number == 30) {
    console.log(`${number}% [%%%.......] 
  Still loading...`);
  } else if (number == 40) {
    console.log(`${number}% [%%%%......] 
  Still loading...`);
  } else if (number == 50) {
    console.log(`${number}% [%%%%%.....] 
  Still loading...`);
  } else if (number == 60) {
    console.log(`${number}% [%%%%%%....] 
  Still loading...`);
  } else if (number == 70) {
    console.log(`${number}% [%%%%%%%...] 
  Still loading...`);
  } else if (number == 80) {
    console.log(`${number}% [%%%%%%%%..] 
  Still loading...`);
  } else if (number == 90) {
    console.log(`${number}% [%%%%%%%%%.]
  Still loading...`);
  } else if (number == 100) {
    console.log(`${number}% Complete!
  [%%%%%%%%%%]`);
  }
}

loadingBar(50);
