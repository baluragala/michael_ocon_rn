const order = {
  name: "cust1",
  address: {
    city: "ny",
    state: "ny",
    name: "test"
  }
};

// const name = order.name;
// const city = order.address.city;

const {
  address: { city },
  name: custName
} = order;
console.log(custName, city);

const members = ["jim", "kim", "lim", "dim", "bim"];
const [, lead, ...enggs] = members;
console.log(lead, enggs);
