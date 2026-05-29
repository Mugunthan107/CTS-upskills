const events = [
    {
        name: "Music Night",
        category: "Music"
    }
];
function addEvent(name = "New Event") {
    console.log(name);
}
const { name, category } = events[0];
console.log(name);
console.log(category);
const clonedEvents = [...events];
const filtered = clonedEvents.filter(
    event => event.category === "Music"
);
console.log(filtered);