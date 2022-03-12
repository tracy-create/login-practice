"use strict";
// login.js와 login.ejs를 연결함
const id = document.querySelector("#id"), // 괄호 안에 넘어오는 선택자를 통해 html의 값을 가져옴
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login() {
  const req = {
    id : id.value,
    psword : psword.value,
  };

  console.log(req)
  console.log(JSON.stringify(req));
  // fetch를 이용해서 서버에 전달
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req),
  });
}