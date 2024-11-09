"use strict";

function main() {
  const n = prompt();

  let objects = [];

  for (let i = 0; i < n; i++) {
    let [a, b] = prompt().split("");

    objects.push({ x: +a, y: +b });

  }

  console.log(objects)

  getCount(objects)
}

function getCount(objects) {

    let count = 0

    objects.map((item) => {
        console.log(item)
        // if (item.x == item.y) {
        //     count++
        // }
    })

    objects.forEach(element => {
        console.log(element)
    });

    // return count

}

main();
