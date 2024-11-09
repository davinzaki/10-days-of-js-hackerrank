// function main () {
//     const a = parseInt(prompt())
//     const b = parseInt(prompt())

//     console.log(a,b)

//     let rec = new Rectangle(a,b)

//     console.log(rec.length)
//     console.log(rec.width)
//     console.log(rec.perimeter)
//     console.log(rec.area)
// }

// function Rectangle(a,b) {
//     this.length = a
//     this.width = b
//     this.perimeter = Number(2 * (a + b))
//     this.area = a * b
// }

function myBike(frame, weheelset, bar) {
    this.fullset = frame + weheelset + bar
}

function main() {
    const bike = new myBike('dosnov', 'big', 'drop')

    console.log(bike.fullset)
}

// console.log(myBike('dosnov', 'big', 'drop'))

main()