var multiplyES5 = function(x, y) {
  return x * y;
};

const multiplyES6 = (x, y) => x * y;

var numbers = [1, 2, 3, 4, 5];
const newArray = numbers.map(function(e) {
  return e * 5;
});
const newArray1 = numbers.map(e => e * 5);
console.log(newArray);
console.log(newArray1);

// this - autobind

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.describe = () => {
    console.log(`Person name:${this.name} and age:${this.age}`);
  };
}

const p1 = new Person("john", 26);
p1.describe();

this.p1ref = p1.describe;
this.p1ref();
