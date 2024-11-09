"use strict";

function main() {
    // const re = /ab*c/
    // the * after "b" means "0 or more occurrences of the preceding item."
    // For instance, to search for "a" followed by "*" followed by "b", you'd use /a\*b/ — the backslash "escapes" the "*", making it literal instead of special.

    // const re = /\/example\//
    // For instance, to search for the string "/example/" followed by one or more alphabetic characters, you'd use /\/example\/[a-z]+/i—the backslashes before each slash make them literal.
    
    let re = /[A-Z]:\\/
    // To match a literal backslash, you need to escape the backslash. For instance, to match the string "C:\" where "C" can be any letter, you'd use /[A-Z]:\\/ — the first backslash escapes the one after it, so the expression searches for a single literal backslash.


     re = new RegExp("a\\*b")
    // If using the RegExp constructor with a string literal, remember that the backslash is an escape in string literals, so to use it in the regular expression, you need to escape it at the string literal level. /a\*b/ and new RegExp("a\\*b") create the same expression, which searches for "a" followed by a literal "*" followed by "b".



    //  using the constructor provides runtime compilation
    // use when the regex pattern will change or when we dont know the pattern like using user input

     re = /^([aiueo]).*\1$/

    // const re4 = /^(aku)laku\1/

    // ^ is for match the beginning of the string / asserts position
    //  (x) is for matches x and remembering x, called capturing groups
    // .* match any characters except newline - between zero and unlimited times
    // . (period): Matches any character except for newline.
    // \1 remembers and uses that match from the first sub-expression within parentheses.
    // $ matches the end of the string / asserts position

    re = /^([a-z]).*\1$/;

// 1- ^ asserts position at start of the string

// 2- 1st Capturing Group ([a-z])

// 3- .* matches any character (except newline) - between zero and unlimited times, as many times as possible, giving back as needed (greedy)

// 4- \1 matches the same text as most recently matched by the 1st capturing group

// 5- $ asserts position at the end of the string

    const reDigit = /^\d{10}$/

    const myArray = re.exec(prompt())

    console.log(myArray)
}

main()