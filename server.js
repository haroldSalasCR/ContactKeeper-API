const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

// Datebase conection
connectDB();

// User Middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the ContactKeeper API..." })
);

// Define Routes
app.use("/api/users", require("./routes/user"));
app.use("/api/contacts", require("./routes/contact"));
app.use("/api/auth", require("./routes/auth"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
