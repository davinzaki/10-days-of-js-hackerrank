"use strict";

const re = /(Mr|Mrs|Ms|Dr|Er)\.\s?[a-zA-z]+$/

// const re = /go*d/

const input = prompt()

// console.log(!!input.match(re))
console.log(!!input.match(re))

// Match letters only /[A-Z]/ig
// Match anything not letters /[^A-Z]/ig
// Match number only /[0-9]/g or /\d+/g
// Match anything not number /[^0-9]/g or /\D+/g
// Match anything not number or letter /[^A-Z0-9]/ig