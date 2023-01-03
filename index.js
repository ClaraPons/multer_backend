const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const userRoutes = require("./routes/user");

require("./models/index");

app.use(express.json());

app.use(cors());

app.use(express.static("public"));

app.use("/user", userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on ${5000}`);
});