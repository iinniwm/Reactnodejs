const express = require("express");
const router = express.Router();
const csvController = require("../controllers/csv.controller");
const upload = require("../middlewares/upload");
const cors = require('cors')

let routes = (app) => {
  router.post("/upload", upload.single("file"), csvController.upload);
  router.get("/read", csvController.getcsvfiles);

  app.use("/api/csv", router);
};

module.exports = routes;