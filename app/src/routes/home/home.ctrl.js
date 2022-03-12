"use strict";

// render - 해당 경로로 왔을 때 넘겨줄 html페이지를 지정해 줌
const hello = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

module.exports = {
  hello, login
};