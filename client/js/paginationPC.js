var productsPerPage = 8; // Số sản phẩm trên mỗi trang
var currentPage = 1; // Trang hiện tại
var productContainer1 = document.getElementById("product-containerPC"); // Tham chiếu đến phần tử hiển thị sản phẩm
let basket = JSON.parse(localStorage.getItem("data")) || [];

//Hàm tạo mảng PC
function getPCProducts(products) {
    const pcProducts = products.filter((product) => product.type === "PC");
    return pcProducts;
}
const pcProducts=getPCProducts(products);

// Hàm để hiển thị sản phẩm trên trang cụ thể
function displayProducts(page) {
    
    var startIndex = (page - 1) * productsPerPage;
    var endIndex = startIndex + productsPerPage;

    // Xóa các sản phẩm hiện tại khỏi danh sách
    productContainer1.innerHTML = '';

    // Hiển thị sản phẩm từ startIndex đến endIndex
    for (var i = startIndex; i < endIndex && i < pcProducts.length; i++) {
        var productPC = pcProducts[i];

        // Tạo các phần tử sản phẩm và thêm chúng vào danh sách
        var productDiv = document.createElement("div");
        productDiv.className = "col-md-3";

        var productImage = document.createElement("img");
        productImage.className = "hinh";
        productImage.src = productPC.imageSrc;

        var linkImg = document.createElement("a");
        linkImg.className = "hinh";
        linkImg.href=productPC.links+"?index="+i+"&type="+productPC.type;

        var productName = document.createElement("div");
        productName.className = "ten-san-pham fix-2-line";
        productName.textContent = productPC.name;

        var productPrice = document.createElement("div");
        productPrice.className = "gia-chung";

        var priceDiv = document.createElement("div");
        priceDiv.className = "gia col-md-10 p-0";
        priceDiv.innerHTML = '<div class="gia-san-pham">' + productPC.price + '</div>' +
                             '<div class="gia-san-pham-cu">' + productPC.oldPrice + '</div>';

        var discountDiv = document.createElement("div");
        discountDiv.className = "giam-gia col-md-2 p-0";
        discountDiv.textContent = productPC.discount;

        var linksDiv = document.createElement("a");
        linksDiv.className = "xem-them-link";
        linksDiv.textContent = 'Add to Cart';
        // linksDiv.href = productPC.links; // Đặt liên kết đến trang chi tiết sản phẩm
        linksDiv.id=`${productPC.id}`;


        productPrice.appendChild(priceDiv);
        productPrice.appendChild(discountDiv);

        linkImg.appendChild(productImage);
        productDiv.appendChild(linkImg);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(linksDiv);

        productContainer1.appendChild(productDiv);
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
}

// Hàm để tạo các nút phân trang
function createPaginationButtons() {
    var totalPages = Math.ceil(pcProducts.length / productsPerPage);
    var paginationContainer1 = document.getElementById("paginationPC");

    // Xóa nút phân trang hiện có (nếu có)
    paginationContainer1.innerHTML = '';

    // Nút đầu trang
    var firstPageButton = document.createElement("button");
    firstPageButton.textContent = "Đầu";
    firstPageButton.addEventListener("click", function () {
        goToPage(1);
    });
    paginationContainer1.appendChild(firstPageButton);

    // Nút các trang
    for (var i = 1; i <= totalPages; i++) {
        var pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.addEventListener("click", function (event) {
            var pageNum = parseInt(event.target.textContent);
            goToPage(pageNum);
        });
        paginationContainer1.appendChild(pageButton);
    }

    // Nút cuối trang
    var lastPageButton = document.createElement("button");
    lastPageButton.textContent = "Cuối";
    lastPageButton.addEventListener("click", function () {
        goToPage(totalPages);
    });
    paginationContainer1.appendChild(lastPageButton);
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
        var productHtml = '<div class="col-md-3">' +
            '<a class="ct-san-pham" href="' + product.links + '">'+'<img class="hinh" src="' + product.imageSrc + '" alt="' + product.name + '">'+'</a>'+
            // '<img class="hinh" src="' + product.imageSrc + '" alt="' + product.name + '">' +
            '<div class="ten-san-pham fix-2-line">' + product.name + '</div>' +
            '<div class="gia-san-pham gia col-md-10 p-0"> ' + product.price + '</div>' +
            '<div class="gia-san-pham-cu gia col-md-10 p-0"> ' + product.oldPrice + '</div>' +
            '<div class="giam-gia col-md-2 p-0"> ' + product.discount + '</div>' +
            // '<a class="xem-them-link" href="' + product.links + '" >Add to Cart</a>' + // Thêm nút "Xem thêm" với href link sản phẩm
            // '<div class="shop" id="shop">'+'</div>'+
            '<a class="xem-them-link" id="'+product.id+'">Add to Cart</a>' +
            '</div>';

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
            var productid= $(this).attr("id");
            // console.log(productid);
            increment(productid);
        });
        $(".ct-san-pham").click(function (e){
            e.preventDefault(); // Ngăn chặn mặc định hành vi khi click vào liên kết
            var url = $(this).attr("href"); // Lấy URL từ thuộc tính href
            window.location.href = url; // Chuyển hướng tới trang chi tiết sản phẩm
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
                $pagination.append('<span class="page">' + i + '</span>');
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
