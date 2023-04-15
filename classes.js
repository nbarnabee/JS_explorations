class ThisThing {
  constructor(prop1) {
    this.one = prop1;
  }
  addOne() {
    this.one++;
    console.log(this.one);
  }
}

class OtherThing extends ThisThing {
  constructor(prop1, prop2) {
    super(prop1);
    this.two = prop2;
  }
  addTwo() {
    this.two++;
    console.log(this.two);
  }
}

/* 
const thing = new OtherThing(1, 2)
would give me an object with the properties
{
  "one": 1, 
  "two": 2,
}
and both the addOne() and addTwo() methods
*/
