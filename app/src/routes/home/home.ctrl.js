"use strict";

const UserStorage = require("../../models/UserStorage");

const output = {
  home : (req, res) => {
    res.render("home/index");
  },
  
  login : (req, res) => {
    res.render("home/login");
  },
};
// render - 해당 경로로 왔을 때 넘겨줄 html페이지를 지정해 줌

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;
    
    const users = UserStorage.getUsers("id", "psword");

    const response = {};
    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.psword[idx] === psword) {
        response.success = true;
        return res.json();
      }
    }

    response.success = false;
    response.msg = "로그인에 실패하였습니다."
    return res.json(response);
  },
};

module.exports = {
  output, process
};