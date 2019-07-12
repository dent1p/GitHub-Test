const booking = require("./Booking.js");

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

let bookings = []

readline.question("Enter start date: ", (dateStart) => {
    bookings.push(new Booking(dateStart))
    console.log(bookings)
    readline.close()
})



