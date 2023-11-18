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

let token = localStorage.getItem("token");

function isUsernameMatchToken(username) {
  return localStorage.getItem("token") == username;
}

function renderAccounts() {
  let __accountsLocal = localStorage.getItem("accounts")
    ? JSON.parse(localStorage.getItem("accounts"))
    : [];

  let thisUser = __accountsLocal.find(
    (account) =>
      account.id === new URLSearchParams(window.location.search).get("id")
  );

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
  let infor = document.getElementById("form-edit-account");

  console.log(infor);

  infor[0].value = `${thisUser.username}`;

  infor[1].value = `${thisUser.email}`;
  infor[2].value = `${thisUser.address}`;
  infor[3].value = `${thisUser.permission}`;

  document.querySelector(".image-preview").src = `${thisUser.thumbnail}`;
  //End Render infor

  //! Delete Image
  let flag = false,
    clickedButton = false;
  var __accounts = __accountsLocal;
  let deleteButton = document.getElementById("delete-button");

  deleteButton.addEventListener("click", () => {
    document.querySelector(".image-preview").src = ``;
    deleteButton.style.display = "none";

    thisUser.thumbnail = null;

    for (let i = 0; i < __accounts.length; i++) {
      if (__accounts[i].id === thisUser.id) {
        __accounts[i].thumbnail = null;
      }
    }

    flag = true;
    clickedButton = true;
  });
  flag = thisUser.thumbnail == null ? true : false;
  //! End Delete Image

  //? Get New Infor
  let newInfor = {
    id: thisUser.id,
    password: thisUser.password,
  };

  infor[0].addEventListener("change", () => {
    newInfor.username = infor[0].value;
  });
  infor[1].addEventListener("change", () => {
    newInfor.email = infor[1].value;
  });
  infor[2].addEventListener("change", () => {
    newInfor.address = infor[2].value;
  });
  infor[3].addEventListener("change", () => {
    newInfor.permission = infor[3].value;
  });

  //? End Get New Infor

  //Update Data
  let buttonEdit = document.getElementById("button-edit");
  buttonEdit.addEventListener("click", () => {
    //Check thumbnail
    let __thumbnail =
      flag == false ? thisUser.thumbnail : localStorage.getItem("image");
    if (clickedButton == false && flag == false) {
      if (localStorage.getItem("image")) {
        __thumbnail = localStorage.getItem("image");
      }
    }
    localStorage.removeItem("image");

    newInfor.thumbnail = __thumbnail;
    //End Check thumbnail

    //Check simple infor
    if (!newInfor.username) {
      newInfor.username = infor[0].value;
    }
    if (!newInfor.email) {
      newInfor.email = infor[1].value;
    }
    if (!newInfor.address) {
      newInfor.address = infor[2].value;
    }
    if (!newInfor.permission) {
      newInfor.permission = infor[3].value;
    }
    //End Check simple infor

    for (let i = 0; i < __accounts.length; i++) {
      if (__accounts[i].id === newInfor.id) {
        __accounts[i] = newInfor;
      }
    }

    __accountsLocal = __accounts;
    localStorage.setItem("accounts", JSON.stringify(__accountsLocal));

    if (isUsernameMatchToken(newInfor.username)) {
      localStorage.setItem("token", newInfor.username);
    }

    redirectToPage("../html/user-management.html");
  });

  //End Update Data
}

function setLocalStorage() {
  //Products
  if (!localStorage.getItem("products")) {
    fetch("../html/products.json")
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("products", JSON.stringify(response));
        renderAccounts();
        setUser();
      });
  }
  //Accounts
  if (!localStorage.getItem("accounts")) {
    fetch("../html/accounts.json")
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("accounts", JSON.stringify(response));
        renderAccounts();
        setUser();
      });
  }
  renderAccounts();
  setUser();
}
function redirectToPage(url) {
  window.location.href = url;
}

function setUser() {
  let userName = document.getElementById("user-account");

  let User = accounts.find(
    (account) => account.username == localStorage.getItem("token")
  );

  if (isUsernameMatchToken(User.username)) {
    localStorage.setItem("token", User.username);
  }

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

setLocalStorage();
setUser();
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("token") === null) {
    window.location.replace("../html/login.html");
  }
});
