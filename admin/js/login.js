let accounts = [
  {
    username: "admin1",
    password: "123456",
    permission: "admin",
  },
  {
    username: "admin2",
    password: "123456",
    permission: "admin",
  },
  {
    username: "admin3",
    password: "123456",
    permission: "admin",
  },
  {
    username: "admin4",
    password: "123456",
    permission: "admin",
  },
];

let isLogin = !!localStorage.getItem("token");

function togglePassword() {
  var passwordField = document.getElementById("password");
  var currentType = passwordField.getAttribute("type");

  if (currentType === "password") {
    passwordField.setAttribute("type", "text");
  } else {
    passwordField.setAttribute("type", "password");
  }
}

function CheckLogin() {
  if (isLogin) {
    window.location.href = "../html/index.html";
  }
}

function Login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  let checkLogin = accounts.some((value) => {
    return value.username === username && value.password === password;
  });

  if (checkLogin) {
    localStorage.setItem("token", username);
    isLogin = true;
    CheckLogin();
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Wrong username or password!",
    });
  }
}
