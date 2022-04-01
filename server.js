const express = require("express");
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, "public")));

app.get("/api/v1", (req, res) => {
  res.json({
    name: "Fredi",
    lastName: "Barraza",
  });
})

app.listen(5000, () => {
  console.log("Server running in port 5000");
});
