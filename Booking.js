class Booking {
    constructor(id, dateStart, dateEnd, guests, items) {
        this.id = id;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.guests = guests;
        this.items = items;
    }
}

module.exports = Booking;