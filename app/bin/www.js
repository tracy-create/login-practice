"use strict";

const app = require("../app");
const PORT = 3000;

// 서버가 띄워지는 부분
app.listen(PORT, () => {
  console.log("서버 가동");
});