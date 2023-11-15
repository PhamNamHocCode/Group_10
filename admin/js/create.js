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
    id: "product" + (data.length + 1),
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
