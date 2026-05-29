class Event {
    constructor(name, seats) {
        this.name = name;
        this.seats = seats;
    }
}
Event.prototype.checkAvailability = function () {
    return this.seats > 0;
};
const event1 = new Event("Art Exhibition", 25);
console.log(event1.checkAvailability());
Object.entries(event1).forEach(([key, value]) => {
    console.log(key, value);
});