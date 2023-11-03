function setLocalStorage() {
  let productsStorage;
  fetch("../html/products.json")
    .then((respone) => respone.json())
    .then((respone) => {
      productsStorage = respone;
      localStorage.setItem("products", JSON.stringify(productsStorage));
    });
}
var data = JSON.parse(localStorage.getItem("products"));

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
setLocalStorage();

var product = null;
function renderProducts() {
  var description = {};
  var name = document.getElementById("name").value;
  description.Processor = document.getElementById("Processor").value;
  description.Graphics = document.getElementById("Graphics").value;
  description.Memory = document.getElementById("Memory").value;
  description.Storage = document.getElementById("Storage").value;
  var price = document.getElementById("price").value;
  var discount = document.getElementById("discount").value;
  var imageSrc = localStorage.getItem("image");

  product = {
    id: data.length + 1,
    name: name,
    description: description,
    price: price,
    discount: discount,
    imageSrc: imageSrc,
  };
  data.push(product);
  localStorage.setItem("newProducts", JSON.stringify(data));
  alert("Sản phẩm đã được lưu!");
}
