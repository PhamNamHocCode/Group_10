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

function showNotification() {
  let notification = document.getElementById("delete-success");
  document.getElementById("delete-success").style.visibility = "visible";
  setTimeout(() => {
    document.getElementById("delete-success").style.visibility = "hidden";
  }, 3000);
  console.log(notification);
}

let currentPage = sessionStorage.getItem("currentPage")
  ? sessionStorage.getItem("currentPage")
  : 1;
let itemsPerPage = 5;

function renderProducts() {
  let __accounts = localStorage.getItem("accounts")
    ? JSON.parse(localStorage.getItem("accounts"))
    : [];

  let products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];

  let orderList = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  let orderProducts = [];
  orderList.forEach((order) => {
    let foundOrder = products.find((product) => product.id === order.id);

    if (foundOrder) {
      foundOrder.quantity = order.item;
      orderProducts.push(foundOrder);
    }
  });

  let product = `<tbody id="product-content">
      </tbody>`;

  let start = (currentPage - 1) * itemsPerPage;
  let end = start + itemsPerPage;

  let paginatedProducts = orderProducts.slice(start, end);

  paginatedProducts.map((value, index) => {
    product += `<tbody id="product-content">
        <tr>
        <td><input type="checkbox" name="#" id=${value.id} /></td>
        <td>${value.name}</td>
        <td>
        <a href="detail.html?id=${value.id}">
          <img
            src="${value.imageSrc}"
            alt="${value.name}"
            width="100px"
            height="auto"
          />
        </a>
        </td>
        <td>${value.price}</td>
        <td>${value.quantity}</td>
        </td>
        <td>
        <a
            href="detail.html?id=${value.id}"
            class="btn btn-secondary btn-sm detail-button">
            <i class="bi bi-eye"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
            </svg>
        </a>
       
        </td>
        </tr>
        </tbody>`;

    document.getElementById("product-content").innerHTML = product;
  });

  renderPagination(orderProducts.length, itemsPerPage);
}

function renderPagination(totalItems, itemsPerPage) {
  let totalPages = Math.ceil(totalItems / itemsPerPage);

  let pagination = '<div id="pagination">';

  for (let i = 1; i <= totalPages; i++) {
    let activeClass = "";
    if (i === currentPage) {
      activeClass = "active";
    }

    pagination += `<button class="page-button ${activeClass}" value="${i}">${i}</button>`;
  }

  pagination += "</div>";

  document.getElementById("product-content").innerHTML += pagination;

  let currentPageButton = document.querySelector(
    `.page-button[value="${currentPage}"]`
  );

  if (currentPageButton) {
    currentPageButton.classList.add("active");
  }

  sessionStorage.setItem("currentPage", currentPage);

  let buttonsPage = document.getElementsByClassName("page-button");
  Array.from(buttonsPage).forEach((buttonPage) => {
    buttonPage.addEventListener("click", () => {
      currentPage = Number(buttonPage.value);
      renderProducts();
    });
  });
}

function setLocalStorage() {
  //Products
  if (!localStorage.getItem("products")) {
    fetch("../html/products.json")
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("products", JSON.stringify(response));
        renderProducts();
        setUser();
      });
  }
  if (localStorage.getItem("newProducts")) {
    var newProducts = localStorage.getItem("newProducts");
    localStorage.setItem("products", newProducts);
    localStorage.removeItem("newProducts");
  }
  //Accounts
  if (!localStorage.getItem("accounts")) {
    fetch("../html/accounts.json")
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("accounts", JSON.stringify(response));
        renderProducts();
        setUser();
      });
  }
  renderProducts();
  setUser();
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
  if (localStorage.getItem("token") === null) {
    setUser();
    window.location.replace("../html/login.html");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  setLocalStorage();
  setUser();

  var token = localStorage.getItem("token");

  if (!token) {
    alert("Bạn chưa đăng nhập. Chuyển hướng đến trang đăng nhập...");
    window.location.href = "../html/login.html";
  }
});
