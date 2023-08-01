const express = require("express");
const bodyparser = require("body-parser");
const app = express();

const adminRoute = require("./routes/admin");

const shopRouter = require("./routes/shop");

app.use(bodyparser.urlencoded({ extended: false }));

app.use("/admin", adminRoute);

app.use(shopRouter);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000);
