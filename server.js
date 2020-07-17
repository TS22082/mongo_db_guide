const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const testRoutes = require("./routes/test-routes.js");
const mongoRoutes = require("./routes/mongo-routes.js");

app.use(testRoutes, mongoRoutes);

app.listen(PORT, () => console.log("http://localhost:3000"));
