var accounts = [
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
var __accounts;

function setLocalStorage() {
  if (!localStorage.getItem("accounts")) {
    localStorage.setItem("accounts", JSON.stringify(accounts));
  }
  __accounts = JSON.parse(localStorage.getItem("accounts"));
}

//Show image
document.getElementById("image").addEventListener("change", function (event) {
  let reader = new FileReader();
  reader.onload = function (e) {
    document.querySelector(".image-preview").src = e.target.result;
    localStorage.setItem("image", e.target.result);
  };
  reader.readAsDataURL(event.target.files[0]);
});
//End Show image

var account = null;
function renderAccounts() {
  let idUser = document.getElementById("id").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let permission = document.getElementById("permission").value;
  let address = document.getElementById("address").value;
  let email = document.getElementById("email").value;
  let status = document.getElementById("status").value;
  let thumbnail = localStorage.getItem("image");
  localStorage.removeItem("image");

  account = {
    id: idUser,
    username: username,
    password: password,
    permission: permission,
    address: address,
    email: email,
    status: status,
    thumbnail: thumbnail,
  };

  __accounts.push(account);
  localStorage.setItem("newAccounts", JSON.stringify(__accounts));
  window.location.replace("../html/user-management.html");
}

function setUser() {
  let userName = document.getElementById("user-account");

  let User = __accounts.find(
    (account) => account.username == localStorage.getItem("token")
  );

  if (User) {
    userName.href = `../html/user.html?id=${User.id}`;
    userName.innerText = localStorage.getItem("token");
  }
}

function logout() {
  localStorage.removeItem("token");
  location.reload();
  window.location.replace("../html/login.html");
}

document.addEventListener("DOMContentLoaded", function () {
  setLocalStorage();
  setUser();

  let token = localStorage.getItem("token");

  if (!token) {
    alert("Bạn chưa đăng nhập. Chuyển hướng đến trang đăng nhập...");
    window.location.href = "../html/login.html";
  }
  if (localStorage.getItem("token") === null) {
    setUser();
    window.location.replace("../html/login.html");
  }
});
