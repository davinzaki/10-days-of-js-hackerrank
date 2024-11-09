function getLetter(s) {
  let letter;

  const firstChar = s.charAt(0);

  const setA = ["a", "i", "u", "e", "o"];
  const setB = ["b", "c", "d", "f", "g"];
  const setC = ["h", "j", "k", "l", "m", "n"];
  const setD = ["n", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"];

  switch (firstChar) {
    case setA.find((char) => char === firstChar):
      return (letter = "A");
    case setB.find((char) => char === firstChar):
      return (letter = "B");
    case setC.find((char) => char === firstChar):
      return (letter = "C");
    case setD.find((char) => char === firstChar):
      return (letter = "D");
  }
}

console.log(getLetter("afsdasd"));
