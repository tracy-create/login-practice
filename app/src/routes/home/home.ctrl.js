"use strict";

const output = {
  home : (req, res) => {
    res.render("home/index");
  },
  
  login : (req, res) => {
    res.render("home/login");
  },
};
// render - 해당 경로로 왔을 때 넘겨줄 html페이지를 지정해 줌

const users = {
  id: ["seowon", "손서원", "tracy"],
  psword: ["1234", "12345", "123456"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하였습니다.",
    });
  },
};

module.exports = {
  output, process
};