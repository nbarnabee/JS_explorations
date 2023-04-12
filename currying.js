/* 



*/

customers = [
  { name: "Bob", email: "bob@bobtown.com" },
  { name: "Anna", email: "anna@bobtown.com" },
  { name: "Steve", email: "steve@bobtown.com" },
  { name: "Paula", email: "paula@bobtown.com" },
  { name: "Tom", email: "tom@bobtown.com" },
  { name: "Jill", email: "jill@bobtown.com" },
];

const messages = customers.map(
  (customer) =>
    (customer.message = `Hello, ${customer.name}!  I'd like to tell you about our special offer!`)
);

function sendMessages(customerList) {
  return function (greeting) {
    return function (message) {
      return `${greeting}, ${message}`;
    };
  };
}

// const customerMap =

function plus(x, y) {
  return x + y;
}

[1, 2, 3].map((num) => plus(num, 1));

// I'm not really getting this.
