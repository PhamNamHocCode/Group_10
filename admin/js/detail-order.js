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

function setLocalStorage() {
  //Accounts
  if (!localStorage.getItem("accounts")) {
    localStorage.setItem("accounts", JSON.stringify(accounts));
    renderProducts();
    setUser();
  }
  renderProducts();
  setUser();
}

function updateProcessedStatus(productId, newStatus) {
  let allOrder = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  let productIndex = allOrder.findIndex((product) => product.id === productId);

  if (productIndex !== -1) {
    allOrder[productIndex].processed = newStatus;

    localStorage.setItem("data", JSON.stringify(allOrder));
  } else {
    console.error("Sản phẩm không tồn tại trong danh sách.");
  }
}

async function handleProcessedClick(event) {
  let processedStatus = event.target.getAttribute("name");

  console.log("Processed Status:", processedStatus);
  if (processedStatus == "false") {
    const result = await Swal.fire({
      title: "Thông báo",
      text: `Đơn hàng đã được xử lý.`,
      icon: "success",
      showCancelButton: true,
    });

    if (result.isConfirmed) {
      let id = event.target.getAttribute("value");
      processedStatus = true;
      updateProcessedStatus(id, processedStatus);

      location.reload();
    }
  } else {
    const result = await Swal.fire({
      icon: "error",
      title: "Thông báo",
      text: "Đơn hàng đã được bỏ xử lý",
      showCancelButton: true,
    });

    if (result.isConfirmed) {
      let id = event.target.getAttribute("value");
      processedStatus = false;
      updateProcessedStatus(id, processedStatus);

      location.reload();
    }
  }
}

function renderProducts() {
  let productsStorage = JSON.parse(localStorage.getItem("data"));

  let productId = new URLSearchParams(window.location.search).get("id");
  let thisProduct = productsStorage.find((value) => value.id === productId);

  console.log(thisProduct);

  if (thisProduct) {
    let product = `
    <div class="main" id="detail-content">
            <div class="container mt-6 mb-7">
            <div class="row justify-content-center">
              <div class="col-lg-12 col-xl-7">
                <div class="card">
                  <div class="card-body p-5">
                    <h2>${thisProduct.customer}</h2>
                    <p class="fs-sm">
                    Đây là biên nhận cho khoản thanh toán
                      <strong>${thisProduct.customer}</strong> đã mua.
                    </p>

                    <div class="border-top border-gray-200 pt-4 mt-4">
                      <div class="row">
                        <div class="col-md-6">
                          <div class="text-muted mb-2">Số thanh toán.</div>
                          <strong>#${thisProduct.randomPaymentNo}</strong>
                        </div>
                        <div class="col-md-6 text-md-end">
                          <div class="text-muted mb-2">Ngày thanh toán (yyyy-mm-dd)</div>
                          <strong>${thisProduct.date}</strong>
                        </div>
                      </div>
                    </div>

                  <table class="table border-bottom border-gray-200 mt-3">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          class="fs-sm text-dark text-uppercase-bold-sm px-0"
                        >
                          Tên đơn hàng
                        </th>
                        <th
                          scope="col"
                          class="fs-sm text-dark text-uppercase-bold-sm text-end px-0"
                        >
                          Giá tiền
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="px-0">${thisProduct.nameProduct}</td>
                        <td class="text-end px-0">$${
                          thisProduct.totalPrice
                        }</td>
                      </tr>
                      <tr>
                        <td class="px-0">Thuế</td>
                        <td class="text-end px-0">$15</td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="mt-5">
                    <div class="d-flex justify-content-end">
                      <p class="text-muted me-3">Subtotal:</p>
                      <span>$${thisProduct.totalPrice + 15}</span>
                    </div>
                    <div class="d-flex justify-content-end">
                      <p class="text-muted me-3">Discount:</p>
                      <span>-$0</span>
                    </div>
                    <div class="d-flex justify-content-end mt-3">
                      <h5 class="me-3">Total:</h5>
                      <h5 class="text-success">$${
                        thisProduct.totalPrice + 15
                      }</h5>
                    </div>
                  </div>
                </div>
                <button
                  href="#!"
                  class="btn btn-dark btn-lg card-footer-btn justify-content-center text-uppercase-bold-sm hover-lift-light"
                  id="processed"
                  value=${thisProduct.id}
                  name=${thisProduct.processed}
                  onclick="handleProcessedClick(event)"
                >
                  <span class="svg-icon text-white me-2"> </span>
                  Xử lý
                </button>
              </div>
            </div>
          </div>
        </div>
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

document.addEventListener("DOMContentLoaded", function () {
  setLocalStorage();
  setUser();

  var token = localStorage.getItem("token");

  if (!token) {
    alert("Bạn chưa đăng nhập. Chuyển hướng đến trang đăng nhập...");
    window.location.href = "../html/login.html";
  }

  if (localStorage.getItem("token") === null) {
    setUser();
    window.location.replace("../html/login.html");
  }
});
