const express = require("express");
const bodyParser = require('body-parser')
const app = express();
const db = require("./models");
const initRoutes = require("./routes/routes");
const {createProxyMiddleware} = require('http-proxy-middleware')
const cors = require('cors')

global.__basedir = __dirname + "/..";

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

db.sequelize.sync();

// app.use(
//   `/api/*`,
  
//   createProxyMiddleware({
//     target: 'http://localhost:8080',
//     changeOrigin: true,
//   })
// );
var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors({
  origin: '*'
}));

const apiProxy = createProxyMiddleware(`/api/*`, {
  target: 'http://localhost:8080',
  changeOrigin: true,
  secure: false,
  logLevel: 'debug',
})

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/',(req,res) => {
    res.sendFile(__dirname+"/index.html")
})

app.get('/records.html',(req,res) => {
  res.sendFile(__dirname+"/records.html")
})

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});