const express = require("express");
const path = require("path");
const router = express.Router();

const rooDir = require("../util/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rooDir, "../", "views", "shop.html"));
});

module.exports = router;
