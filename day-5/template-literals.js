function main() {
  let s1 = parseInt(prompt());
  let s2 = parseInt(prompt());

  [s1, s2] = [s1, s2].sort();

  console.log([s1, s2]);

  console.log((s1 + s2))

  const [x, y] = sides`The area is: ${s1 * s2}. \nThe perimeter is: ${
    2 * (s1 + s2)
  }`;

  console.log('[x, y]', [x, y])

  console.log(s1 === x ? s1 : -1);
  console.log(s2 === y ? s2 : -1);
}

function sides(literals, ...expressions) {
  console.log('expressions', expressions)

  let P = expressions[1];
  let A = expressions[0];


  let s1 = (P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;
  let s2 = (P - Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4;


  [s1, s2] = [s1, s2].sort();


  return [s1, s2];
}

main();

function test() {
  let P = 48;
  let A = 140;

  let s1 = P + Math.sqrt(Math.pow(P, 2) - 16 * A);
  let s2 = P - Math.sqrt(Math.pow(P, 2) - 16 * A) / 4;

  console.log((P + Math.sqrt(Math.pow(P, 2) - 16 * A)) / 4);

  // console.log((Math.pow(P, 2) - (16 * A)))
  // console.log(s1, s2)
}

// test()

// let a, b, rest;

// [a, b] = [1, 2];

// [a, b, ...rest] = [1, 2, 3, 4, 5]

// console.log([a, b])
