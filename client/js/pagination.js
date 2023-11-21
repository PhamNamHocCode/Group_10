var productsPerPage = 8; // Số sản phẩm trên mỗi trang
var currentPage = 1; // Trang hiện tại
var productContainer = document.getElementById("product-container"); // Tham chiếu đến phần tử hiển thị sản phẩm

let basket = JSON.parse(localStorage.getItem("data")) || [];
// var products = [
//     {
//         name: "PC WORKSTATION DUAL AMD EPYC 7742: 256 THREADS | DUAL VGA",
//         price: "1.050.000.000 đ",
//         oldPrice: "1.855.000.000 đ",
//         discount: "43%",
//         imageSrc: "../image/hinh1.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC WORKSTATION X99-T8D/E3-2673/64G DDR3/PSU650/1SP P7",
//         price: "38.180.000 đ",
//         oldPrice: "51.855.000.000 đ",
//         discount: "33%",
//         imageSrc: "../image/hinh2.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC WORKSTATION X99-T8D/E3-2673/64G DDR3/PSU650/1SP P7",
//         price: "38.840.000 đ",
//         oldPrice: "58.840.000 đ",
//         discount: "35%",
//         imageSrc: "../image/hinh3.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC WORKSTATION X99-T8D/E3-2673/64G DDR3/PSU650/1SP P8",
//         price: "58.840.000 đ",
//         oldPrice: "71.855.000.000 đ",
//         discount: "15%",
//         imageSrc: "../image/hinh4.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC WORKSTATION X99-T8D/E3-2673/128G DDR3/PSU650/1SP P8",
//         price: "1.250.000.000 đ",
//         oldPrice: "1.955.000.000 đ",
//         discount: "40%",
//         imageSrc: "../image/hinh4.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC WORKSTATION X99/E3-2680/32G DDR3/PSU550/JT9605B",
//         price: "50.900.000 đ",
//         oldPrice: "65.900.000 đ",
//         discount: "17%",
//         imageSrc: "../image/hinh3.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC WORKSTATION X99/E3-2680/64G DDR3/PSU550/JT9605B",
//         price: "58.900.000 đ",
//         oldPrice: "75.900.000 đ",
//         discount: "20%",
//         imageSrc: "../image/hinh3.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC WORKSTATION X79/E3-2670/32G DDR3/PSU550/JT9331",
//         price: "60.900.000 đ",
//         oldPrice: "75.350.000 đ",
//         discount: "20%",
//         imageSrc: "../image/hinh3.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC WORKSTATION X79/E3-2670/64G DDR3/PSU550/JT9331",
//         price: "65.950.000.000 đ",
//         oldPrice: "81.855.000.000 đ",
//         discount: "20%",
//         imageSrc: "../image/hinh3.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC WORKSTATION X79/E3-2670/128G DDR3/PSU550/JT9331",
//         price: "69.950.000.000 đ",
//         oldPrice: "91.855.000.000 đ",
//         discount: "20%",
//         imageSrc: "../image/hinh3.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC Workstation T90 – Core i9 13900K | 64G | RTX3090 24GB | 2TB SSD",
//         price: "66.900.000 đ",
//         oldPrice: "81.855.000.000 đ",
//         discount: "20%",
//         imageSrc: "../image/hinh5.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC Workstation T90 – Core i9 13900K | 128G | RTX3090 24GB | 2TB SSD",
//         price: "69.900.000 đ",
//         oldPrice: "85.855.000.000 đ",
//         discount: "20%",
//         imageSrc: "../image/hinh5.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC Gaming STAR CHICKEN AQUA | RTX 3060TI, Intel | RTX3090 32GB | 2TB SSD ",
//         price: "88.050.000.000 đ",
//         oldPrice: "1.155.000.000 đ",
//         discount: "35%",
//         imageSrc: "../image/hinh6.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC NCPC Virtualization 01 (Xeon 6138/ Z11PA-D8C/ 32GB/ SSD 1TB/ 700W)",
//         price: "75.900.000 đ",
//         oldPrice: "90.890.000 đ",
//         discount: "15%",
//         imageSrc: "../image/hinh7.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC NCPC Virtualization 01 (Xeon 6138/ Z11PA-D8C/ 64GB/ SSD 1TB/ 700W)",
//         price: "85.050.000.000 đ",
//         oldPrice: "92.450.000 đ",
//         discount: "11%",
//         imageSrc: "../image/hinh8.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC Workstation Machine Learning VIP (5955WX/ WRX80E/ 128G/ 2TB/ 10TB HDD/ 4X RTX 4090/ 2000W)",
//         price: "1.050.000.000 đ",
//         oldPrice: "1.855.000.000 đ",
//         discount: "43%",
//         imageSrc: "../image/hinh9.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC - MACHINE LEARNING 03 (5995WX/ WRX80E/ 256GB RAM/ 20TB SSD/ 3X RTX 4090 O24G/ 2000W)",
//         price: "564.540.000 đ",
//         oldPrice: "679.540.000 đ",
//         discount: "20%",
//         imageSrc: "../image/hinh10.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC HOTGEAR AMD Ryzen 9 / Ryzen 9 7900X / MAIN B650/ DDR4 16GB / SSD 250GB M.2 NVME",
//         price: "1.150.000.000 đ",
//         oldPrice: "1.955.000.000 đ",
//         discount: "40%",
//         imageSrc: "../image/hinh11.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC GAMING AMD Ryzen 9 / Ryzen 9 9900X / MAIN B650/ DDR4 128GB / SSD 2TB M.2 NVME",
//         price: "2.250.000.000 đ",
//         oldPrice: "2.555.000.000 đ",
//         discount: "15%",
//         imageSrc: "../image/hinh12.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     {
//         name: "PC GAMING AMD Ryzen 9 / Ryzen 9 9900X / MAIN B650/ DDR4 256GB / SSD 2TB M.2 NVME",
//         price: "2.450.000.000 đ",
//         oldPrice: "2.755.000.000 đ",
//         discount: "15%",
//         imageSrc: "../image/hinh14.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"PC"
//     },
//     // Thêm các sản phẩm khác vào đây
//     {
//         name: "XPS 15 Laptop",
//         price: "1.050.000.000 đ",
//         oldPrice: "1.855.000.000 đ",
//         discount: "43%",
//         imageSrc: "../image/anhlaptop1.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"Laptop"
//     },
//     {
//         name: "XPS 17 Laptop",
//         price: "38.180.000 đ",
//         oldPrice: "51.855.000.000 đ",
//         discount: "33%",
//         imageSrc: "../image/anhlaptop2.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"Laptop"
//     },
//     {
//         name: "Precision 5480 Workstation",
//         price: "38.840.000 đ",
//         oldPrice: "58.840.000 đ",
//         discount: "25%",
//         imageSrc: "../image/anhlaptop3.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"Laptop"
//     },
//     {
//         name: "Precision 3480 Workstation",
//         price: "58.840.000 đ",
//         oldPrice: "71.855.000.000 đ",
//         discount: "15%",
//         imageSrc: "../image/anhlaptop4.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"Laptop"
//     },
//     {
//         name: "Precision 3470 Mobile Workstation",
//         price: "1.250.000.000 đ",
//         oldPrice: "1.955.000.000 đ",
//         discount: "40%",
//         imageSrc: "../image/anhlaptop5.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"Laptop"
//     },
//     {
//         name: "Latitude 3445 Chromebook",
//         price: "50.900.000 đ",
//         oldPrice: "65.900.000 đ",
//         discount: "17%",
//         imageSrc: "../image/anhlaptop6.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"Laptop"
//     },
//     {
//         name: "Inspiron 14 2-in-1 Laptop",
//         price: "58.900.000 đ",
//         oldPrice: "75.900.000 đ",
//         discount: "20%",
//         imageSrc: "../image/anhlaptop7.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"Laptop"
//     },
//     {
//         name: "XPS 15 Laptop",
//         price: "1.050.000.000 đ",
//         oldPrice: "1.855.000.000 đ",
//         discount: "43%",
//         imageSrc: "../image/anhlaptop1.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"Laptop"
//     },
//     {
//         name: "XPS 17 Laptop",
//         price: "38.180.000 đ",
//         oldPrice: "51.855.000.000 đ",
//         discount: "33%",
//         imageSrc: "../image/anhlaptop2.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"Laptop"
//     },
//     {
//         name: "Precision 5480 Workstation",
//         price: "38.840.000 đ",
//         oldPrice: "58.840.000 đ",
//         discount: "25%",
//         imageSrc: "../image/anhlaptop3.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"Laptop"
//     },
//     {
//         name: "Precision 3480 Workstation",
//         price: "58.840.000 đ",
//         oldPrice: "71.855.000.000 đ",
//         discount: "15%",
//         imageSrc: "../image/anhlaptop4.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"Laptop"
//     },
//     {
//         name: "Precision 3470 Mobile Workstation",
//         price: "1.250.000.000 đ",
//         oldPrice: "1.955.000.000 đ",
//         discount: "40%",
//         imageSrc: "../image/anhlaptop5.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"Laptop"
//     },
//     {
//         name: "Latitude 3445 Chromebook",
//         price: "50.900.000 đ",
//         oldPrice: "65.900.000 đ",
//         discount: "17%",
//         imageSrc: "../image/anhlaptop6.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"Laptop"
//     },
//     {
//         name: "Inspiron 14 2-in-1 Laptop",
//         price: "58.900.000 đ",
//         oldPrice: "75.900.000 đ",
//         discount: "20%",
//         imageSrc: "../image/anhlaptop7.png",
//         links: "../html/ChiTietSanPham.html",
//         type:"Laptop"
//     }

// ];

//Hàm tạo mảng PC

function getLaptopProducts(products) {
  const laptopProducts = products.filter(
    (product) => product.type === "Laptop"
  );
  return laptopProducts;
}
const laptopProducts = getLaptopProducts(products);
// Hàm để hiển thị sản phẩm trên trang cụ thể
function displayProducts(page) {
  var startIndex = (page - 1) * productsPerPage;
  var endIndex = startIndex + productsPerPage;

  // Xóa các sản phẩm hiện tại khỏi danh sách
  productContainer.innerHTML = "";

  // Hiển thị sản phẩm từ startIndex đến endIndex
  for (var i = startIndex; i < endIndex && i < laptopProducts.length; i++) {
    var productLaptop = laptopProducts[i];

    // Tạo các phần tử sản phẩm và thêm chúng vào danh sách
    var productDiv = document.createElement("div");
    productDiv.className = "col-md-3";

    var productImage = document.createElement("img");
    productImage.className = "hinh";
    productImage.src = productLaptop.imageSrc;

    var linkImg = document.createElement("a");
    linkImg.className = "hinh";
    linkImg.href = productLaptop.links + "?index="+i+"&type="+productLaptop.type;

    var productName = document.createElement("div");
    productName.className = "ten-san-pham fix-2-line";
    productName.textContent = productLaptop.name;

    var productPrice = document.createElement("div");
    productPrice.className = "gia-chung";

    var priceDiv = document.createElement("div");
    priceDiv.className = "gia col-md-10 p-0";
    priceDiv.innerHTML =
      '<div class="gia-san-pham">' +
      productLaptop.price +
      "</div>" +
      '<div class="gia-san-pham-cu">' +
      productLaptop.oldPrice +
      "</div>";

    var discountDiv = document.createElement("div");
    discountDiv.className = "giam-gia col-md-2 p-0";
    discountDiv.textContent = productLaptop.discount;

    // var linksDiv = document.createElement("div");
    // // const newHref = `product-cart/${increment(productLaptop.id)}`;
    // const link = document.createElement("a");
    // link.className = "xem-them-link";
    // link.textContent = 'Add to Cart';
    // link.href = newHref; // Đặt liên kết đến trang chi tiết sản phẩm

    // linksDiv.appendChild(link);

    var linksDiv = document.createElement("a");
    linksDiv.className = "xem-them-link";
    linksDiv.textContent = "Add to Cart";
    linksDiv.href = productLaptop.links; // Đặt liên kết đến trang chi tiết sản phẩm

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
}

// Hàm để tạo các nút phân trang
function createPaginationButtons() {
  var totalPages = Math.ceil(laptopProducts.length / productsPerPage);
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

$(document).ready(function () {
  var currentPage = 1; // Trang hiện tại
  var productsPerPage = products.length; // Số sản phẩm trên mỗi trang

  // Hiển thị danh sách sản phẩm ban đầu
  // displayProducts(products.slice(0, productsPerPage));

  // Xử lý sự kiện khi người dùng nhấn nút "Lọc"
  $("#filter-button1").click(function () {
    var keyword = $("#search-menu").val().toLowerCase(); // Lấy từ khóa tìm kiếm

    // Lọc sản phẩm dựa trên từ khóa và giá
    var filteredProducts = products.filter(function (product) {
      var productName = product.name.toLowerCase(); // Chuyển tên sản phẩm thành chữ thường
      // Kiểm tra xem sản phẩm có phù hợp với tiêu chí lọc không
      var nameMatch = productName.includes(keyword); // Kiểm tra tên sản phẩm
      return nameMatch;
    });

    // Hiển thị danh sách sản phẩm sau khi lọc
    currentPage = 1; // Reset trang về trang đầu tiên
    displayProducts(filteredProducts.slice(0, productsPerPage)); // Hiển thị 10 sản phẩm đầu tiên
    updatePagination(filteredProducts.length); // Cập nhật phân trang
  });

  // Hàm hiển thị danh sách sản phẩm
  function displayProducts(productsToDisplay) {
    var $productContainer = $("#product-container_Laptop");
    $productContainer.empty(); // Xóa danh sách sản phẩm hiện tại

    // Thêm sản phẩm vào danh sách
    productsToDisplay.forEach(function (product) {
      var productHtml =
        '<div class="col-md-3">' +
        '<a class="xem-them-link" href="' +
        product.links +
        '">' +
        '<img class="hinh" src="' +
        product.imageSrc +
        '" alt="' +
        product.name +
        '">' +
        "</a>" +
        // '<img class="hinh" src="' + product.imageSrc + '" alt="' + product.name + '">' +
        '<div class="ten-san-pham fix-2-line">' +
        product.name +
        "</div>" +
        '<div class="gia-san-pham gia col-md-10 p-0"> ' +
        product.price +
        "</div>" +
        '<div class="gia-san-pham-cu gia col-md-10 p-0"> ' +
        product.oldPrice +
        "</div>" +
        '<div class="giam-gia col-md-2 p-0"> ' +
        product.discount +
        "</div>" +
        // '<a class="xem-them-link" href="' + product.links + '" >Add to Cart</a>' + // Thêm nút "Xem thêm" với href link sản phẩm
        // '<div class="shop" id="shop">'+'</div>'+
        '<a class="xem-them-link" id="' +
        product.id +
        '">Add to Cart</a>' +
        "</div>";

      $productContainer.append(productHtml);
      // const div = document.querySelector(".shop");

      // div.insertAdjacentHTML("afterbegin", `
      // <a onclick="increment(${id})" class="xem-them-link">Add to Cart</a> `);
    });

    // Gắn sự kiện click vào nút "Add to cart"
    $(".xem-them-link").click(function (e) {
      e.preventDefault(); // Ngăn chặn mặc định hành vi khi click vào liên kết
      // var url = $(this).attr("href"); // Lấy URL từ thuộc tính href
      // window.location.href = url; // Chuyển hướng tới trang chi tiết sản phẩm
      // Tăng số lượng sản phẩm
      var productid = $(this).attr("id");
      // console.log(productid);
      increment(productid);
    });
  }

  // Hàm cập nhật phân trang
  function updatePagination(totalProducts) {
    // var $pagination = $("#pagination");
    // $pagination.empty(); // Xóa phân trang hiện tại

    var totalPages = Math.ceil(totalProducts / productsPerPage);

    if (totalPages > 1) {
      // Thêm nút "Trang đầu"
      $pagination.append('<span class="page">Đầu</span>');

      // Thêm các trang
      for (var i = 1; i <= totalPages; i++) {
        $pagination.append('<span class="page">' + i + "</span>");
      }

      // Thêm nút "Trang cuối"
      $pagination.append('<span class="page">Cuối</span>');

      // Sử dụng event delegation để xử lý sự kiện khi người dùng nhấn vào trang
      $pagination.on("click", ".page", function () {
        var pageText = $(this).text();
        if (pageText === "Đầu") {
          currentPage = 1;
        } else if (pageText === "Cuối") {
          currentPage = totalPages;
        } else {
          currentPage = parseInt(pageText);
        }

        var startIndex = (currentPage - 1) * productsPerPage;
        var endIndex = startIndex + productsPerPage;
        displayProducts(products.slice(startIndex, endIndex));
      });
    }
  }
});

let increment = (id1) => {
  console.log(id1);
  // let selectedItem = id;
  let search = basket.find((x) => x.id === id1);

  if (search === undefined) {
    basket.push({
      id: id1,
      item: 1,
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
