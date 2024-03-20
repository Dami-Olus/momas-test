const express = require("express");

const app = express();



app.get("/", (req, res) => res.json("My API is running"));

app.use("/momas", require("./routes/momas.routes"));

app.listen(5001, console.log("API running on 5001"));