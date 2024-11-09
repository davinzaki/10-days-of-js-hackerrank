'use strict';

function getSecondLargest() {
    const sizeOfArrayInput = prompt()
    console.log('sizeOfArrayInput',sizeOfArrayInput)
    const  numsArray = [...new Set()]

    if (sizeOfArrayInput) {
        for (let i = 0; i < sizeOfArrayInput; i++) {
            let nums = prompt()
            console.log('nums', nums)
            numsArray.push(nums)

            console.log('numsArray', numsArray)
        }
    }

    numsArray.sort( (a,b) => { b - a})
    console.log('numsArray.sort', numsArray.sort( (a,b) => { b - a }))
    console.log('numsArray[1]', numsArray[1])
    return numsArray[1]
};

getSecondLargest()