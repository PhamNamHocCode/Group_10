// let shop = document.getElementById("shop");
let basket = JSON.parse(localStorage.getItem("data")) || [];

$(document).ready(function () {

    var currentPage = 1; // Trang hiện tại
    // var productsPerPage = products.length; // Số sản phẩm trên mỗi trang
    var productsPerPage = 8; // Số sản phẩm trên mỗi trang

    // Hiển thị danh sách sản phẩm ban đầu
    displayProducts(products.slice(0, productsPerPage));

    // Xử lý sự kiện khi người dùng nhấn nút "Lọc"
    $("#filter-button").click(function () {
        var keyword = $("#search-input").val().toLowerCase(); // Lấy từ khóa tìm kiếm
        var minPrice = parseFloat($("#min-price-input").val()); // Lấy giá tối thiểu
        var maxPrice = parseFloat($("#max-price-input").val()); // Lấy giá tối đa

        // Lọc sản phẩm dựa trên từ khóa và giá
        var filteredProducts = products.filter(function (product) {
            var productName = product.name.toLowerCase(); // Chuyển tên sản phẩm thành chữ thường
            var productPrice = parseFloat(product.price.replace(/[$,\s]/g, '')); // Chuyển giá thành số

            // Kiểm tra xem sản phẩm có phù hợp với tiêu chí lọc không
            var nameMatch = productName.includes(keyword); // Kiểm tra tên sản phẩm
            var priceMatch = (isNaN(minPrice) || productPrice >= minPrice) &&
                (isNaN(maxPrice) || productPrice <= maxPrice); // Kiểm tra giá sản phẩm

            return nameMatch && priceMatch;
        });

        // Hiển thị danh sách sản phẩm sau khi lọc
        currentPage = 1; // Reset trang về trang đầu tiên
        displayProducts(filteredProducts.slice(0, productsPerPage)); // Hiển thị 10 sản phẩm đầu tiên
        updatePagination(filteredProducts.length); // Cập nhật phân trang
    });
    $("#filter-button1").click(function () {
        var keyword = $("#search-menu").val().toLowerCase(); // Lấy từ khóa tìm kiếm
        // var minPrice = parseFloat($("#min-price-input").val()); // Lấy giá tối thiểu
        // var maxPrice = parseFloat($("#max-price-input").val()); // Lấy giá tối đa

        // Lọc sản phẩm dựa trên từ khóa và giá
        var filteredProducts = products.filter(function (product) {
            var productName = product.name.toLowerCase(); // Chuyển tên sản phẩm thành chữ thường
            // var productPrice = parseFloat(product.price.replace(/[$,\s]/g, '')); // Chuyển giá thành số

            // Kiểm tra xem sản phẩm có phù hợp với tiêu chí lọc không
            var nameMatch = productName.includes(keyword); // Kiểm tra tên sản phẩm
            // var priceMatch = (isNaN(minPrice) || productPrice >= minPrice) &&
            //     (isNaN(maxPrice) || productPrice <= maxPrice); // Kiểm tra giá sản phẩm

            return nameMatch;
        });

        // Hiển thị danh sách sản phẩm sau khi lọc
        currentPage = 1; // Reset trang về trang đầu tiên
        displayProducts(filteredProducts.slice(0, productsPerPage)); // Hiển thị 10 sản phẩm đầu tiên
        updatePagination(filteredProducts.length); // Cập nhật phân trang
    });

    // Hàm hiển thị danh sách sản phẩm
    function displayProducts(productsToDisplay) {
        var $productContainer = $("#product-container");
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
           
            // Tăng số lượng sản phẩm
            var productid= $(this).attr("id");
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
        var $pagination = $("#pagination");
        $pagination.empty(); // Xóa phân trang hiện tại

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