let name = "bala",
  qual = "masters";

let person = {
  name: name,
  qual: qual,
  describe: function() {
    console.log(this);
  }
};
person[name + qual] = "new key";

let person1 = {
  name,
  qual,
  describe() {
    console.log(this);
  },
  [name + qual]: "new key"
};
console.log(person);
console.log(person1);
