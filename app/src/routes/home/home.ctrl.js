"use strict";

const User = require("../../models/User");

const output = {
  home : (req, res) => {
    res.render("home/index");
  },
  login : (req, res) => {
    res.render("home/login");
  },
  register : (req, res) => {
    res.render("home/register");
  }
};
// render - 해당 경로로 왔을 때 넘겨줄 html페이지를 지정해 줌

const process = {
  login: (req, res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
};

module.exports = {
  output, process,
};