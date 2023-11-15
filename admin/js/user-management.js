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

function showNotification() {
  let notification = document.getElementById("delete-success");
  document.getElementById("delete-success").style.visibility = "visible";
  setTimeout(() => {
    document.getElementById("delete-success").style.visibility = "hidden";
  }, 3000);
  console.log(notification);
}

let currentPage = sessionStorage.getItem("currentPage")
  ? sessionStorage.getItem("currentPage")
  : 1;
let itemsPerPage = 5;

// function handleDeleteEvents() {
//   let products = JSON.parse(localStorage.getItem("products"));
//   let buttonsDelete = document.getElementsByClassName("button-delete");
//   Array.from(buttonsDelete).forEach((buttonDelete) => {
//     buttonDelete.addEventListener("click", () => {
//       document.getElementById("overlay").style.visibility = "visible";
//       document.getElementById("pop-up").style.visibility = "visible";

//       let yesButton = document.getElementById("accept-delete");
//       yesButton.addEventListener("click", () => {
//         products = products.filter((element) => {
//           return element.id !== Number(buttonDelete.value);
//         });
//         localStorage.setItem("products", JSON.stringify(products));
//         document.getElementById("overlay").style.visibility = "hidden";
//         document.getElementById("pop-up").style.visibility = "hidden";
//         renderAccounts();
//         handleDeleteEvents();
//         showNotification();
//       });

//       let noButton = document.getElementById("reject-delete");
//       noButton.addEventListener("click", () => {
//         document.getElementById("overlay").style.visibility = "hidden";
//         document.getElementById("pop-up").style.visibility = "hidden";
//       });
//     });
//   });
// }

function renderAccounts() {
  let interface = `<tbody id="user-content">
      </tbody>`;

  let start = (currentPage - 1) * itemsPerPage;
  let end = start + itemsPerPage;

  let paginatedUser = accounts.slice(start, end);

  paginatedUser.map((value, index) => {
    interface += `<tbody id="user-content">
    <tr>
      <td>
        <a href="user.html?id=${value.id}">
          <img
            src="${value.thumbnail}"
            alt="${value.username}"
            width="100px"
            height="auto"
          />
        </a>
      </td>
      <td>${value.username}</td>
      <td>${value.permission}</td>
      <td>${value.address}</td>
      <td>${value.email}</td>
      </td>
      <td>
      <a
          href="user.html?id=${value.id}"
          class="btn btn-secondary btn-sm detail-button">
          <i class="bi bi-eye"></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
          </svg>
      </a>
      <a
          href="user-edit.html?id=${value.id}"
          class="btn btn-warning btn-sm"
          >
          <i class="bi bi-gear"></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
            <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
            <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
          </svg>
      </a
      >
      <button
          class="btn btn-danger btn-sm ml-1 button-delete"
          button-delete
          data-id='${value.id}'
          value='${value.id}'
      >
      <i class="bi bi-trash"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
      </svg>
      </button>
      </td>
    </tr>
    </tbody>`;

    document.getElementById("user-content").innerHTML = interface;
  });

  renderPagination(accounts.length, itemsPerPage);
}

function renderPagination(totalItems, itemsPerPage) {
  let totalPages = Math.ceil(totalItems / itemsPerPage);

  let pagination = '<div id="pagination">';

  for (let i = 1; i <= totalPages; i++) {
    let activeClass = "";
    if (i === currentPage) {
      activeClass = "active";
    }

    pagination += `<button class="page-button ${activeClass}" value="${i}">${i}</button>`;
  }

  pagination += "</div>";

  document.getElementById("user-content").innerHTML += pagination;

  // Get the current page button
  let currentPageButton = document.querySelector(
    `.page-button[value="${currentPage}"]`
  );

  // Kiểm tra xem currentPageButton có tồn tại và không phải là null hay không
  if (currentPageButton && currentPageButton.classList) {
    // Add the active class to the current page button
    currentPageButton.classList.add("active");
  }

  sessionStorage.setItem("currentPage", currentPage);

  let buttonsPage = document.getElementsByClassName("page-button");
  Array.from(buttonsPage).forEach((buttonPage) => {
    buttonPage.addEventListener("click", () => {
      currentPage = Number(buttonPage.value);
      renderAccounts();
      // handleDeleteEvents();
    });
  });
}

function setLocalStorage() {
  if (!localStorage.getItem("products")) {
    fetch("../html/products.json")
      .then((response) => response.json())
      .then((response) => {
        localStorage.setItem("products", JSON.stringify(response));
        renderAccounts();
        // handleDeleteEvents();
      });
  }
  if (localStorage.getItem("newProducts")) {
    var newProducts = localStorage.getItem("newProducts");
    localStorage.setItem("products", newProducts);
    localStorage.removeItem("newProducts");
  }
  renderAccounts();
  // handleDeleteEvents();
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
