let accounts = [
  {
    id: "kimngoc",
    username: "Kim Ngoc",
    password: "123456",
    permission: "admin",
    thumbnail: "../image/user1.png",
    address: "An Dương Vương, Quận 5, TP HCM",
    email: "kimngoc@gmail.com",
  },
  {
    id: "hungdung",
    username: "Hung Dung",
    password: "123456",
    permission: "admin",
    thumbnail: "../image/fake-glasses.png",
    address: "Cầu Giấy, Hà Nội",
    email: "hungdung@gmail.com",
  },
  {
    id: "quyhung",
    username: "Quy Hung",
    password: "123456",
    permission: "admin",
    thumbnail: "../image/fake-glasses.png",
    address: "Nguyễn Đình Chiểu, Quận 3, TP HCM",
    email: "quyhung@gmail.com",
  },
  {
    id: "phamnam",
    username: "Pham Nam",
    password: "123456",
    permission: "admin",
    thumbnail: "../image/fake-glasses.png",
    address: "Âu Dương Lân, Quận 8, TP HCM",
    email: "phamnam@gmail.com",
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
