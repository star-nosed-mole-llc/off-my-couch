const express = require("express");
const path = require("path");

const app = express();

const assetsRouter = require("./server/assets-router");

app.use("/", express.static(path.join(__dirname, "public")));
app.use("/", assetsRouter);

app.get("/api/v1", (req, res) => {
  res.json({
    project: "React and Express Boilerplate",
    from: "Vanaldito",
  });
});

app.listen(5000, () => {
  console.log("Server running in port 5000");
});
