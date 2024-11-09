"use strict"

function factorial(n) {

  if (n <= 1) {
    return 1
  }

  return n * factorial((n-1))
}

console.log(factorial(4))

// function doSmth(n) {
//     if (n === 0) {
//         console.log('Task compltd')
//         return
//     }
//     console.log('Im doing smth')
//     doSmth(n-1)
// }

// // doSmth(3)

// function findFactorial(n) {
//     if (n === 0) return 1

//     console.log(n)

//     return n * findFactorial(n-1)
// }

// console.log(findFactorial(3))