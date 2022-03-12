"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home/index");
}); // 경로 지정
// render - 해당 경로로 왔을 때 넘겨줄 html페이지를 지정해 줌

router.get("/login", (req, res) => {
  res.render("home/login");
});

module.exports = router;