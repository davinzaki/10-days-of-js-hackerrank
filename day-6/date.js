"use strict";

function main() {
    const input = parseInt(prompt());

    

    for (let i = 0; i < input; i++) {
        const d = prompt()
        getDayName(d)
    }
}

function getDayName(date) {
    console.log('date', date)
    let dayName;

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date(date)

    // let month = months[d.getMonth()]

    // let dateParsed = d.toString()


    console.log('d', d)
    console.log('d', d.getDate())


    // let day = dayNam
    console.log(d.toISOString())
    console.log('getMonth',d.getMonth())
    console.log('d.getDay', days[d.getDay()] )

}

main()