function renderProducts() {
  let productsStorage = JSON.parse(localStorage.getItem("products"));
  let productId = Number(new URLSearchParams(window.location.search).get("id"));
  let thisProduct = productsStorage.find((value) => value.id == productId);

  //Show image
  document.getElementById("image").addEventListener("change", function (event) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.querySelector(".image-preview").src = e.target.result;
      localStorage.setItem("image", e.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  });
  //End Show image

  //Render infor
  let e = document.getElementById("form-edit-product");

  e[0].value = `${thisProduct.name}`;

  e[1].value = `${thisProduct.description.Graphics}`;
  e[2].value = `${thisProduct.description.Memory}`;
  e[3].value = `${thisProduct.description.Processor}`;
  e[4].value = `${thisProduct.description.Storage}`;

  e[5].value = `${thisProduct.price}`;
  e[6].value = `${thisProduct.discount}`;
  document.querySelector(".image-preview").src = `${thisProduct.imageSrc}`;
  //End Render infor

  //Delete Image
  var flag = false;
  var data = JSON.parse(localStorage.getItem("products"));
  let deleteButton = document.getElementById("delete-button");

  deleteButton.addEventListener("click", () => {
    document.querySelector(".image-preview").src = ``;
    deleteButton.style.display = "none";

    thisProduct.imageSrc = "";

    data[thisProduct.id - 1].imageSrc = "";
    flag = true;
  });
  flag = thisProduct.imageSrc == "" ? true : false;
  //End Delete Image

  //Update Data
  let buttonEdit = document.getElementById("button-edit");
  buttonEdit.addEventListener("click", async () => {
    let description = {
      Graphics: e[1].value,
      Memory: e[2].value,
      Processor: e[3].value,
      Storage: e[4].value,
    };

    let imageSrc =
      flag == false ? thisProduct.imageSrc : localStorage.getItem("image");

    let product = {
      id: thisProduct.id,
      name: e[0].value,
      description: description,
      price: e[5].value,
      discount: e[6].value,
      imageSrc: imageSrc,
    };

    data.forEach((value, index) => {
      if (value.id === product.id) {
        data[index] = product;
      }
    });
    localStorage.setItem("products", JSON.stringify(data));
    redirectToPage("index.html");
  });

  //End Update Data
}

function setLocalStorage() {
  if (!localStorage.getItem("products")) {
    fetch("../html/products.json")
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("products", JSON.stringify(response));
      });
  }
  renderProducts();
}

setLocalStorage();

function redirectToPage(url) {
  window.location.href = url;
}
