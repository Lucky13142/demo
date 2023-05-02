const express = require("express");
const app = express();
const route = require("./config/router.config");
const bodyParser = require("body-parser");
const logs = require("./middleware/log");

app.engine('html', require('express-art-template'));
app.set('views', __dirname + '/views/');
app.set('view engine', 'html');
console.log('======>',route);
app.use('/public', express.static(__dirname + '/public/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logs);
//注册路由
route(app);

app.listen(3000, () => {
  console.log("server is running http://localhost:3000");
});

module.exports = app;