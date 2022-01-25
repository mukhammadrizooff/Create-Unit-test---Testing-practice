class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    return this.a + this.b;
  }

  subtract() {
    return this.a - this.b;
  }

  divide() {
    return this.a / this.b;
  }

  multiply() {
    return this.a * this.b;
  }
}

const simpleCalc = new Calculator(1, 1);
module.exports = simpleCalc;
