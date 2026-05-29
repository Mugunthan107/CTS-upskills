const events = [];
events.push({
    name: "Music Night",
    category: "Music"
});
events.push({
    name: "Workshop on Baking",
    category: "Workshop"
});
events.push({
    name: "Rock Concert",
    category: "Music"
});
const musicEvents = events.filter(
    event => event.category === "Music"
);
console.log(musicEvents);
const cards = events.map(
    event => `Event: ${event.name}`
);
console.log(cards);