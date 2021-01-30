var express = require("express");
var parseurl = require("parseurl");
var session = require("express-session");

var app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false, // 세션데이터가 바뀌기 전 까지 세션데이터를 저장하지 않는다.
    saveUninitialized: true, // 세션 필요하기 전 까지 세션을 구동하지 않는다.
  })
);

app.get("/", function (req, res, next) {
  res.send("Hello session");
});

app.listen(3000, function () {
  console.log(`Example app listening at http://localhost:3000`);
});
