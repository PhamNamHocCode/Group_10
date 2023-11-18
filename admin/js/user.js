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

function renderAccounts() {
  let __accounts = localStorage.getItem("accounts")
    ? JSON.parse(localStorage.getItem("accounts"))
    : [];

  let user = __accounts.find(
    (account) =>
      account.id === new URLSearchParams(window.location.search).get("id")
  );

  let interface = `<div class="main" id="detail-content">
  <section class="section about-section gray-bg" id="about">
          <div class="container">
              <div class="row align-items-center flex-row-reverse">
                  <div class="col-lg-6">
                      <div class="about-text go-to">
                          <h3 class="dark-color" id="userTitle">${user.username}</h3>
                          <h6 class="theme-color lead"></h6>
                      </div>
                  </div>
                  <div class="col-lg-6">
                      <div class="about-avatar">
                          <img src="${user.thumbnail}" title="${user.username}" alt="${user.username}">
                      </div>
                  </div>
              </div>
              <div class="counter">
                  <div class="row">
                      <div class="col-6 col-lg-3">
                          <div class="count-data text-center">
                              <h6 class="count h2">Permission</h6>
                              <p class="m-0px font-w-600">${user.permission}</p>
                          </div>
                      </div>
                      <div class="col-6 col-lg-3">
                          <div class="count-data text-center">
                              <h6 class="count h2">Address</h6>
                              <p class="m-0px font-w-600">${user.address}</p>
                          </div>
                      </div>
                      <div class="col-6 col-lg-3">
                          <div class="count-data text-center">
                              <h6 class="count h2">Password</h6>
                              <p class="m-0px font-w-600">${user.password}</p>
                          </div>
                      </div>
                      <div class="col-6 col-lg-3">
                          <div class="count-data text-center">
                              <h6 class="count h2">Email</h6>
                              <p class="m-0px font-w-600">${user.email}</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  </div>`;
  document.getElementById("detail-content").innerHTML = interface;
}

function setUser() {
  let userName = document.getElementById("user-account");
  let __accounts = localStorage.getItem("accounts")
    ? JSON.parse(localStorage.getItem("accounts"))
    : [];
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
  renderAccounts();
  setUser();
  if (localStorage.getItem("token") === null) {
    window.location.replace("../html/login.html");
  }
});
