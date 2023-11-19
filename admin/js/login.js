let accounts = [
  {
    id: "kimngoc",
    username: "Kim Ngoc",
    password: "123456",
    permission: "admin",
    thumbnail: "../image/user1.png",
    address: "An Dương Vương, Quận 5, TP HCM",
    email: "kimngoc@gmail.com",
    status: "active",
  },
  {
    id: "hungdung",
    username: "Hung Dung",
    password: "123456",
    permission: "admin",
    thumbnail: "../image/man2.png",
    address: "Cầu Giấy, Hà Nội",
    email: "hungdung@gmail.com",
    status: "active",
  },
  {
    id: "quyhung",
    username: "Quy Hung",
    password: "123456",
    permission: "admin",
    thumbnail: "../image/fake-glasses.png",
    address: "Nguyễn Đình Chiểu, Quận 3, TP HCM",
    email: "quyhung@gmail.com",
    status: "active",
  },
  {
    id: "phamnam",
    username: "Pham Nam",
    password: "123456",
    permission: "admin",
    thumbnail: "../image/man.png",
    address: "Âu Dương Lân, Quận 8, TP HCM",
    email: "phamnam@gmail.com",
    status: "inactive",
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

  let __accounts = localStorage.getItem("accounts")
    ? JSON.parse(localStorage.getItem("accounts"))
    : [];

  // let checkLogin = __accounts.some((value) => {
  //   return value.username === username && value.password === password;
  // });

  // if (checkLogin) {
  //   localStorage.setItem("token", username);
  //   isLogin = true;
  //   CheckLogin();
  // } else {
  //   Swal.fire({
  //     icon: "error",
  //     title: "Oops...",
  //     text: "Wrong username or password!",
  //   });
  // }

  let user = __accounts.find((value) => {
    return value.username === username && value.password === password;
  });

  if (user && user.status === "active") {
    localStorage.setItem("token", username);
    isLogin = true;
    CheckLogin();
  } else if (user && user.status !== "active") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Your account is inactive. Please contact support.",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Wrong username or password!",
    });
  }
}

function setLocalStorage() {
  //Accounts
  if (!localStorage.getItem("accounts")) {
    fetch("../html/accounts.json")
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("accounts", JSON.stringify(response));
        setUser();
      });
  }
  setUser();
}

setLocalStorage();
