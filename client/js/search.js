var productsPerPage = 8; // Số sản phẩm trên mỗi trang
var currentPage = 1; // Trang hiện tại
var productContainer = document.getElementById("product-container"); // Tham chiếu đến phần tử hiển thị sản phẩm
let basket = JSON.parse(localStorage.getItem("data")) || [];

// //Hàm tạo mảng Laptop
// function getLaptopProducts(products) {
//   const laptopProducts = products.filter((product) => product.type === "Laptop");
//   return laptopProducts;
// }
// const laptopProducts = getLaptopProducts(products);
// Hàm để hiển thị sản phẩm trên trang cụ thể
function displayProducts(page) {
  var startIndex = (page - 1) * productsPerPage;
  var endIndex = startIndex + productsPerPage;

  // Xóa các sản phẩm hiện tại khỏi danh sách
  productContainer.innerHTML = "";

  // Hiển thị sản phẩm từ startIndex đến endIndex
  for (var i = startIndex; i < endIndex && i < products.length; i++) {
    var product = products[i];

    // Tạo các phần tử sản phẩm và thêm chúng vào danh sách
    var productDiv = document.createElement("div");
    productDiv.className = "col-md-3";

    var productImage = document.createElement("img");
    productImage.className = "hinh";
    productImage.src = product.imageSrc;

    var linkImg = document.createElement("a");
    linkImg.className = "hinh";
    linkImg.href = product.links + "?index="+i+"&type="+product.type;

    var productName = document.createElement("div");
    productName.className = "ten-san-pham fix-2-line";
    productName.textContent = product.name;

    var productPrice = document.createElement("div");
    productPrice.className = "gia-chung";

    var priceDiv = document.createElement("div");
    priceDiv.className = "gia col-md-10 p-0";
    var priceDiv = document.createElement("div");
    priceDiv.className = "gia col-md-10 p-0";
    priceDiv.innerHTML = '<div class="gia-san-pham">' + product.price + '</div>' +
                         '<div class="gia-san-pham-cu">' + product.oldPrice + '</div>';

    var discountDiv = document.createElement("div");
    discountDiv.className = "giam-gia col-md-2 p-0";
    discountDiv.textContent = product.discount;
    // linksDiv.appendChild(link);

    var linksDiv = document.createElement("a");
    linksDiv.className = "xem-them-link";
    linksDiv.textContent = 'Add to Cart';
    linksDiv.id=`${product.id}`;
    // linksDiv.href = productLaptop.links; // Đặt liên kết đến trang chi tiết sản phẩm

    productPrice.appendChild(priceDiv);
    productPrice.appendChild(discountDiv);

    linkImg.appendChild(productImage);
    productDiv.appendChild(linkImg);
    // productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(linksDiv);

    productContainer.appendChild(productDiv);
    }
    $(".xem-them-link").click(function (e) {
        e.preventDefault(); // Ngăn chặn mặc định hành vi khi click vào liên kết
        // var url = $(this).attr("href"); // Lấy URL từ thuộc tính href
        // window.location.href = url; // Chuyển hướng tới trang chi tiết sản phẩm
        // Tăng số lượng sản phẩm
        var productid= $(this).attr("id");
        // console.log(productid);
        increment(productid);
    });
    // productContainer.appendChild(productDiv);
  }



// Hàm để tạo các nút phân trang
function createPaginationButtons() {
  var totalPages = Math.ceil(products.length / productsPerPage);
  var paginationContainer = document.getElementById("pagination");

  // Xóa nút phân trang hiện có (nếu có)
  paginationContainer.innerHTML = "";

  // Nút đầu trang
  var firstPageButton = document.createElement("button");
  firstPageButton.textContent = "Đầu";
  firstPageButton.addEventListener("click", function () {
    goToPage(1);
  });
  paginationContainer.appendChild(firstPageButton);

  // Nút các trang
  for (var i = 1; i <= totalPages; i++) {
    var pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.addEventListener("click", function (event) {
      var pageNum = parseInt(event.target.textContent);
      goToPage(pageNum);
    });
    paginationContainer.appendChild(pageButton);
  }

  // Nút cuối trang
  var lastPageButton = document.createElement("button");
  lastPageButton.textContent = "Cuối";
  lastPageButton.addEventListener("click", function () {
    goToPage(totalPages);
  });
  paginationContainer.appendChild(lastPageButton);
}

// Hàm để điều hướng đến một trang cụ thể
function goToPage(pageNum) {
  currentPage = pageNum;
  displayProducts(currentPage);
}

// Hiển thị trang đầu tiên và tạo phân trang
displayProducts(currentPage);
createPaginationButtons();

let increment = (id1) => {
  console.log(id1);
  // let selectedItem = id;
  let search = basket.find((x) => x.id === id1);

  if (search === undefined) {
    basket.push({
      id: id1,
      item: 1,
      processed: false,
    });
  } else {
    search.item += 1;
  }

  console.log(basket);
  update(id1);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  // console.log(id);
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  // update(selectedItem.id);
  basket = basket.filter((x) => x.item !== 0);
  console.log(basket);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // document.getElementById(id).innerHTML = search.item;
  calculation();
};

let calculation = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();

