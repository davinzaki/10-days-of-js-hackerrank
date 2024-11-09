"use strict"

function vowelsAndConsonants(s) {
  for (let i = 0; i < s.length; i++) {
    if (
      s.charAt(i) == "a" ||
      s.charAt(i) == "i" ||
      s.charAt(i) == "u" ||
      s.charAt(i) == "e" ||
      s.charAt(i) == "o"
    ) {
      console.log(s.charAt(i));
    }

    // switch(s.charAt(i)) {
    //     case 'a':
    //     case 'i':
    //     case 'u':
    //     case 'e':
    //     case 'o':
    //         console.log(s.charAt(i))
    //     default:
    //         console.log(s.charAt(i))
    // }
  }

  for (let i = 0; i < s.length; i++) {
    if (
      s.charAt(i) != "a" &&
      s.charAt(i) != "i" &&
      s.charAt(i) != "u" &&
      s.charAt(i) != "e" &&
      s.charAt(i) != "o"
    ) {
      console.log(s.charAt(i));
    }
  }
}

function vowelsAndConsonantsArrayMethod(s) {
    const str = s.split("")
    const vowel = ['a','i','u','e','o']
    // for (let i = 0; i < str.length; i++){
    //     // if (vowel.includes(str[i])) {
    //     //     console.log(str[i])
    //     // }

    //     // if (vowel.indexOf)
    // }

    for (let v of s) {
        if (vowel.includes(v)) {
            console.log(v)
        }
    }
    
    for (let v of s) {
        if (!vowel.includes(v))
            console.log(v)
    }
}

vowelsAndConsonantsArrayMethod("javascriptloops")

// vowelsAndConsonants("javascriptloops");
// console.log('asdasd')
