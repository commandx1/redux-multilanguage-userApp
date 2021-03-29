const express = require("express");
const app = express();

const db = require("./data.json");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.get("/api/test", (req, res) => {
  res.status(200).send(db);
});

app.post("/api/test", (req, res) => {
  const user = req.body.user;
  db.users.push(user);
  res.status(200).send(user);
});

app.get("/api/test/:id", (req, res) => {
  const userId = req.params.id;
  const user = db.users.filter((u) => u.id === userId);
  res.status(200).send(user[0]);
});

app.patch("/api/test/:id", (req, res) => {
  const user = req.body.user;
  const userID = req.params.id;
  const updatedUsers = db.users.map((u) =>
    u.id === userID
      ? { ...u, name: user.name, email: user.email, username: user.username }
      : u
  );
  db.users = updatedUsers;
  res.status(200).send({ id: userID, ...user });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname + "/public/"));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + "/public/index.html"));
}

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running");
});
