const EventEmtiter = require("events");

const customEmiter = new EventEmtiter();

customEmiter.on("response", (name, id) => {
  console.log(`date recieved ${name} with id:${id}`);
});

customEmiter.emit("response");

customEmiter.on("response", () => {
  console.log(`some other logic here `);
});
