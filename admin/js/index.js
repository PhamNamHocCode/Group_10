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
  // Delete product
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
      });

      let noButton = document.getElementById("reject-delete");
      noButton.addEventListener("click", () => {
        document.getElementById("overlay").style.visibility = "hidden";
        document.getElementById("pop-up").style.visibility = "hidden";
      });
    });
  });
  //End Delete product
}

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

setLocalStorage();
