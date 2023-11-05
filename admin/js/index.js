function showNotification() {
  let notification = document.getElementById("delete-success");
  document.getElementById("delete-success").style.visibility = "visible";
  setTimeout(() => {
    document.getElementById("delete-success").style.visibility = "hidden";
  }, 3000);
  console.log(notification);
}

let currentPage = 1;
let itemsPerPage = 5;

function handleDeleteEvents() {
  let products = JSON.parse(localStorage.getItem("products"));
  let buttonsDelete = document.getElementsByClassName("button-delete");
  Array.from(buttonsDelete).forEach((buttonDelete) => {
    buttonDelete.addEventListener("click", () => {
      document.getElementById("overlay").style.visibility = "visible";
      document.getElementById("pop-up").style.visibility = "visible";

      let yesButton = document.getElementById("accept-delete");
      yesButton.addEventListener("click", () => {
        products = products.filter((element) => {
          return element.id !== Number(buttonDelete.value);
        });
        localStorage.setItem("products", JSON.stringify(products));
        document.getElementById("overlay").style.visibility = "hidden";
        document.getElementById("pop-up").style.visibility = "hidden";
        renderProducts();
        handleDeleteEvents();
        showNotification();
      });

      let noButton = document.getElementById("reject-delete");
      noButton.addEventListener("click", () => {
        document.getElementById("overlay").style.visibility = "hidden";
        document.getElementById("pop-up").style.visibility = "hidden";
      });
    });
  });
}

function renderProducts() {
  let products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  let product = `<tbody id="product-content">
    </tbody>`;

  let start = (currentPage - 1) * itemsPerPage;
  let end = start + itemsPerPage;

  let paginatedProducts = products.slice(start, end);

  paginatedProducts.map((value, index) => {
    product += `<tbody id="product-content">
      <tr>
      <td>${index + 1}</td>
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
      </td>
      <td>
      <a
          href="detail.html?id=${value.id}"
          class="btn btn-secondary btn-sm detail-button"
          >Chi tiết</a
      >
      <a
          href="edit.html?id=${value.id}"
          class="btn btn-warning btn-sm"
          >Sửa</a
      >
      <button
          class="btn btn-danger btn-sm ml-1 button-delete"
          button-delete
          data-id="item.id"
          value=${value.id}
      >
          Xóa
      </button>
      </td>
      </tr>
      </tbody>`;

    document.getElementById("product-content").innerHTML = product;
  });

  renderPagination(products.length, itemsPerPage);
}

function renderPagination(totalItems, itemsPerPage) {
  let totalPages = Math.ceil(totalItems / itemsPerPage);

  let pagination = '<div id="pagination">';

  for (let i = 1; i <= totalPages; i++) {
    pagination += `<button class="page-button" value="${i}">${i}</button>`;
  }

  pagination += "</div>";

  document.getElementById("product-content").innerHTML += pagination;

  let buttonsPage = document.getElementsByClassName("page-button");
  Array.from(buttonsPage).forEach((buttonPage) => {
    buttonPage.addEventListener("click", () => {
      currentPage = Number(buttonPage.value);
      renderProducts();
      handleDeleteEvents();
    });
  });
}

function setLocalStorage() {
  if (!localStorage.getItem("products")) {
    fetch("../html/products.json")
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("products", JSON.stringify(response));
        renderProducts();
        handleDeleteEvents();
      });
  }
  if (localStorage.getItem("newProducts")) {
    var newProducts = localStorage.getItem("newProducts");
    localStorage.setItem("products", newProducts);
    localStorage.removeItem("newProducts");
  }
  renderProducts();
  handleDeleteEvents();
}

setLocalStorage();
