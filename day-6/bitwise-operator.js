"use strict";
// let binaryArr = []

// function decimalToBinary(n) {
//     if (n === 0) return 1

//     binaryArr.push(n%2)

//     return decimalToBinary(Math.floor(n/2))
// }

// function main() {
//     const n = parseInt(prompt('Input decimal'))

//     decimalToBinary(n)

//     alert(`Binary from decimal ${n} is ${binaryArr.reverse().join('')}\nBinary number ${binaryArr.length}`)
// }

// main()

function main() {
  const q = parseInt(prompt());

  console.log("q", q);
  for (let i = 0; i < q; i++) {
    const n = parseInt(prompt());
    const k = parseInt(prompt());

  //  console.log(getMaxlessThank(n, k));
   console.log(getMaxlessThank2(n, k));
  }
}

function getMaxlessThank(n, k) {
  // console.log("n", n, "k", k);
  let arrN = [];

  for (let i = 1; i <= n; i++) {
    // console.log(i);
    arrN.push(i);
  }

  // console.log(arrN);

  const bitwisedArr = []
  // let ANDed = 0

  arrN.forEach((x) => {
    for (let i = 0; i < arrN.length; i++) {
      if (arrN[i] > x) {
        // console.log(`${x} & ${arrN[i]} = ${x & arrN[i]}`);
        const bitwised = x & arrN[i]
        bitwisedArr.push(bitwised)
        
      }
    }
  });

  // console.log(ANDed)

  // console.log('bitwisedArr', bitwisedArr)

  const result = Math.max.apply(Math, bitwisedArr.filter((x) => x < k))

  // console.log('result', result)

  return result;
  // console.log('bitwisedArr.length',bitwisedArr.length)
}

function getMaxlessThank2(n, k) {
  let max = 0
  for (let i = 1; i <= n; i++) {
    // console.log('i', i)
    for (let j = i + 1; j <= n; j++) {
      let bw = i & j
      if (bw > max && bw < k)
        max = bw
      // console.log(`${i} & ${j} = ${i&j}`)
    }
  }
  return max
 }

main();
