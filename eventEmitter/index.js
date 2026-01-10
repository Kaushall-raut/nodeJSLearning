const EventEmitter = require("events");

const obj = new EventEmitter();

let login, logout, purchase, update;
login = logout = purchase = update = 0;

obj.on("log-in", (username) => {
  login += 1;
  console.log(`User ${username}`);
});

obj.on("log-out", (username) => {
  logout += 1;
  console.log(`User ${username} log Out`);
});

obj.on("purchase", ({ username, item }) => {
  purchase += 1;
  console.log(`User ${username}, purchase ${item}`);
});

obj.on("update", (username, updateName) => {
  update += 1;
  console.log(`User ${username} update their name to ${updateName}`);
});

obj.on("log", () => {
  console.log(typeof login);

  console.log(
    `user have login ${Number(
      login
    )} times , logout ${logout} ,purchase ${purchase} , update ${update}`
  );
});

obj.emit("log-in", "kaushal");
obj.emit("log-in", "kaushal");
obj.emit("log-in", "kaushal");
obj.emit("log-out", "kaushal");
obj.emit("purchase", { username: "kaushal", item: "phone" });
obj.emit("update", "soul");

obj.emit("log");
