function setLocalStorage() {
  if (!localStorage.getItem("products")) {
    fetch("../html/products.json")
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("products", JSON.stringify(response));
        renderProducts();
      });
  } else {
    renderProducts();
  }
}

// function renderProducts() {
let productsStorage = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : [];

let productId = new URLSearchParams(window.location.search).get("id");
console.log(productId);
let thisProduct = productsStorage.filter((value) => {
  return value.id == productId;
})[0];
let product = `<div class="main">
  </div>`;

productsStorage.map((value, index) => {
  product += `<div class="main">
        <h1 class="mb-4">${value.name}</h1>
        <div class="mb-4">
          <img src=${value.imageSrc} alt="${value.name}" style="width: 100px" />
        </div>
        <h1 class="mb-4">${value.price}</h1>
        <h1 class="mb-4">${value.discount}</h1>
        <h1 class="mb-4" id="description"> <b> Description </b> <br>
          <p id="description-content">${value.description}</p>
        </h1>

    </div>`;

  document.getElementById("detail-content").innerHTML = product;
});
// }

function renderProducts() {
  let productsStorage = JSON.parse(localStorage.getItem("products"));
  let productId = new URLSearchParams(window.location.search).get("id");
  let thisProduct = productsStorage.find((value) => value.id == productId);

  if (thisProduct) {
    let product = `<div class="main">
      <h1 class="mb-4">${thisProduct.name}</h1>
      <div class="mb-4">
        <img src=${thisProduct.imageSrc} alt="${thisProduct.name}" style="width: 100px" />
      </div>
      <h1 class="mb-4">${thisProduct.price}</h1>
      <h1 class="mb-4">${thisProduct.discount}</h1>
      <h1 class="mb-4" id="description"> <b> Description </b> <br>
        <p id="description-content">${thisProduct.description}</p>
      </h1>
    </div>`;

    document.getElementById("detail-content").innerHTML = product;
  }
}

setLocalStorage();
