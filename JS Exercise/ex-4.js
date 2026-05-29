const events = [];
function addEvent(name, category) {
    events.push({ name, category });
}
function registerUser(name) {
    console.log(`${name} registered successfully`);
}
function filterEventsByCategory(category, callback) {
    const result = events.filter(event => event.category === category);
    callback(result);
}
function registrationCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const musicCount = registrationCounter();
addEvent("Music Night", "Music");
addEvent("Cooking Workshop", "Workshop");
console.log(musicCount());
filterEventsByCategory("Music", data => {
    console.log(data);
});