function setLocalStorage() {
  let productsStorage;
  fetch("../html/products.json")
    .then((respone) => respone.json())
    .then((respone) => {
      productsStorage = respone;
      localStorage.setItem("products", JSON.stringify(productsStorage));
      renderProducts();
    });
}

function renderProducts() {
  let products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  let product = `<tbody id="product-content">
  </tbody>`;

  products.map((value, index) => {
    product += `<tbody id="product-content">
    <tr>
    <td>${index + 1}</td>
    <td>${value.name}</td>
    <td>
    <img
        src="${value.imageSrc}"
        alt="${value.name}"
        width="100px"
        height="auto"
    />
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
        href="#"
        class="btn btn-warning btn-sm"
        >Sửa</a
    >
    <button
        class="btn btn-danger btn-sm ml-1"
        button-delete
        data-id="item.id"
    >
        Xóa
    </button>
    </td>
    </tr>
    </tbody>`;

    document.getElementById("product-content").innerHTML = product;
  });
}

setLocalStorage();
