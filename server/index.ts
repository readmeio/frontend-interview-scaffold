import express from "express";

const PORT = 4321;

const app = express();

app.use(express.static("dist"));

app.get("/api", (req, res) => {
  res.send("OK");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
