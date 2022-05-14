function cat(array) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.meow = () => console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  let cats = [];
  for (let currString of array) {
    let currData = currString.split(" ");
    let currCat = new Cat(currData[0], currData[1]);

    currCat.meow(currCat);
  }

  cats.forEach((c) => c.meow());
}

cat(["Mellow 2", "Tom 5"]);
