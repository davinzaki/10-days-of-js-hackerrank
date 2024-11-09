class Polygon {
  constructor(len) {
    this.len = len;
  }

  perimeter() {
    // const len = this.len
    // let sum = 0
    // for (let i = 0; i < len.length; i++) {
    //     sum += len[i]
    // }
    // len.forEach(el => {
    //     console.log(el)
    //     sum += el
    // });

    return this.len.reduce((accumulator, item) => accumulator + item, 0);
    // reduce method using 2 parameter
    // 1. function()
    // reduce function parameter is total, currentValue, currentIndex(optional), arr(optional)
    // for this example accumulator == total, use for the single value that will returned by reduce method

    // 2. Initial value for accumulator
  }
}

const rectangle = new Polygon([10, 10, 20, 20]);

console.log(rectangle.perimeter());
