let isLogin = localStorage.getItem("token") ? true : false;

function checkLogin() {
  if (isLogin) {
    window.location.href = "../html/index.html";
  }
}

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let check = 
}
