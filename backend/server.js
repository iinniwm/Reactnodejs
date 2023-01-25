const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models");
const initRoutes = require("./routes/routes");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

global.__basedir = __dirname + "/..";

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

db.sequelize.sync();

app.use(
  cors({
    origin: "*",
  })
);

const apiProxy = createProxyMiddleware(`/api/*`, {
  target: "http://localhost:8080",
  changeOrigin: true,
  secure: false,
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/records.html", (req, res) => {
  res.sendFile(__dirname + "/records.html");
});

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
