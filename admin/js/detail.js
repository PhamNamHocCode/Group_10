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

function setLocalStorage() {
  if (!localStorage.getItem("products")) {
    fetch("../html/products.json")
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("products", JSON.stringify(response));
        renderProducts();
      });
  }
  if (localStorage.getItem("newProducts")) {
    var newProducts = localStorage.getItem("newProducts");
    localStorage.setItem("products", newProducts);
    localStorage.removeItem("newProducts");
  }
  renderProducts();
}
function renderProducts() {
  let productsStorage = JSON.parse(localStorage.getItem("products"));
  let productId = new URLSearchParams(window.location.search).get("id");
  let thisProduct = productsStorage.find((value) => value.id === productId);

  if (thisProduct) {
    let product = `<div class="main" id="detail-content">
    <section class="section about-section gray-bg" id="about">
            <div class="container">
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-lg-6">
                        <div class="about-text go-to">
                            <h3 class="dark-color">${thisProduct.name}</h3>
                            <h6 class="theme-color lead"></h6>
                            <p>${thisProduct.price}</p>
                            <p>${thisProduct.discount}</p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="about-avatar">
                            <img src="${thisProduct.imageSrc}" title="${thisProduct.name}" alt="${thisProduct.name}">
                        </div>
                    </div>
                </div>
                <div class="counter">
                    <div class="row">
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2">Processor</h6>
                                <p class="m-0px font-w-600">${thisProduct.description.Processor}</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2">Storage</h6>
                                <p class="m-0px font-w-600">${thisProduct.description.Storage}</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2">Graphics</h6>
                                <p class="m-0px font-w-600">${thisProduct.description.Graphics}</p>
                            </div>
                        </div>
                        <div class="col-6 col-lg-3">
                            <div class="count-data text-center">
                                <h6 class="count h2">Memory</h6>
                                <p class="m-0px font-w-600">${thisProduct.description.Memory}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    `;
    document.getElementById("detail-content").innerHTML = product;
  }
}

function setUser() {
  let userName = document.getElementById("user-account");

  let User = accounts.find(
    (account) => account.username == localStorage.getItem("token")
  );

  userName.href = `../html/user.html?id=${User.id}`;
  userName.innerText = localStorage.getItem("token");
}

function logout() {
  localStorage.removeItem("token");
  location.reload();
  window.location.replace("../html/login.html");
}

setLocalStorage();
setUser();
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("token") === null) {
    window.location.replace("../html/login.html");
  }
});
