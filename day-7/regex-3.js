"use strict";

const re = /\d+/gm
const input = prompt()

// console.log(input.match(re))

const r = input.match(re)

for (const i of r) {
    console.log(i)
}
