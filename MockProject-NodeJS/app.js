import express from "express";
const app = express();

app.get("/", (req, res, next) => {
  res.status(200).send("Hello from the server ??!!!");
});
export default app;
