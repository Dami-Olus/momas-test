const express = require("express");
const app = express();


app.use(express.json());

// Importing routes
const momasRoutes = require("./routes/momas.routes");

// Registering routes
app.use("/momas", momasRoutes);

// Define a default route
app.get("/", (req, res) => res.json("My API is running"));

// Start the server
const port = 5002;
app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
