var express = require("express");
var parseurl = require("parseurl");
var session = require("express-session");
var FileStore = require("session-file-store")(session);

var app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false, // 세션데이터가 바뀌기 전 까지 세션데이터를 저장하지 않는다.
    saveUninitialized: true, // 세션 필요하기 전 까지 세션을 구동하지 않는다.
    store: new FileStore(),
  })
);

app.get("/", function (req, res, next) {
  console.log(req.session);
  if (req.session.num === undefined) {
    req.session.num = 1;
  } else {
    req.session.num = req.session.num + 1;
  }
  res.send(`Views : ${req.session.num}`);
});

app.listen(3000, function () {
  console.log(`Example app listening at http://localhost:3000`);
});
