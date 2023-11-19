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

function renderProducts() {
  let productsStorage = JSON.parse(localStorage.getItem("products"));
  let productId = new URLSearchParams(window.location.search).get("id");
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

  //! Delete Image
  let flag = false,
    clickedButton = false;
  var data = JSON.parse(localStorage.getItem("products"));
  let deleteButton = document.getElementById("delete-button");

  deleteButton.addEventListener("click", () => {
    document.querySelector(".image-preview").src = ``;
    deleteButton.style.display = "none";

    thisProduct.imageSrc = null;

    for (let i = 0; i < data.length; i++) {
      if (data[i].id === thisProduct.id) {
        data[i].imageSrc = null;
      }
    }

    flag = true;
    clickedButton = true;
  });
  flag = thisProduct.imageSrc == null ? true : false;
  //! End Delete Image

  //? Get New Data
  let description = {};

  e[1].addEventListener("change", () => {
    description.Graphics = e[1].value;
  });
  e[2].addEventListener("change", () => {
    description.Memory = e[2].value;
  });
  e[3].addEventListener("change", () => {
    description.Processor = e[3].value;
  });
  e[4].addEventListener("change", () => {
    description.Storage = e[4].value;
  });

  let product = {
    id: thisProduct.id,
  };

  e[0].addEventListener("change", () => {
    product.name = e[0].value;
  });
  e[5].addEventListener("change", () => {
    product.price = e[5].value;
  });
  e[6].addEventListener("change", () => {
    product.discount = e[6].value;
  });

  //? End Get New Data

  //Update Data
  let buttonEdit = document.getElementById("button-edit");
  buttonEdit.addEventListener("click", () => {
    //Check imageSrc
    let imageSrc =
      flag == false ? thisProduct.imageSrc : localStorage.getItem("image");
    if (clickedButton == false && flag == false) {
      if (localStorage.getItem("image")) {
        imageSrc = localStorage.getItem("image");
      }
    }
    localStorage.removeItem("image");

    product.imageSrc = imageSrc;
    //End Check imageSrc

    //Check simple infor
    if (!product.name) {
      product.name = e[0].value;
    }
    if (!product.price) {
      product.price = e[5].value;
    }
    if (!product.discount) {
      product.discount = e[6].value;
    }
    //End Check simple infor

    //Check description
    if (!description.Graphics) {
      description.Graphics = e[1].value;
    }
    if (!description.Memory) {
      description.Memory = e[2].value;
    }
    if (!description.Processor) {
      description.Processor = e[3].value;
    }
    if (!description.Storage) {
      description.Storage = e[4].value;
    }

    product.description = description;
    //End Check description

    for (let i = 0; i < data.length; i++) {
      if (data[i].id === product.id) {
        data[i] = product;
      }
    }
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

function redirectToPage(url) {
  window.location.href = url;
}

function setUser() {
  let userName = document.getElementById("user-account");

  let User = accounts.find(
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
