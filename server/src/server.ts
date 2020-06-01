import express from "express";

const app = express();

app.get("/users", (req, res) => {
  return res.json({ message: "Hello World 2" });
});

app.listen(3333);
