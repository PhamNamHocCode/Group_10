$(document).ready(function () {
    // Sản phẩm của bạn
    var products = [
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "1.050.000.000 đ",
            oldPrice: "1.855.000.000 đ",
            discount: "43%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        },
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "38.180.000 đ",
            oldPrice: "51.855.000.000 đ",
            discount: "33%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        },
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "38.840.000 đ",
            oldPrice: "58.840.000 đ",
            discount: "35%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "58.840.000 đ",
            oldPrice: "71.855.000.000 đ",
            discount: "15%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "1.250.000.000 đ",
            oldPrice: "1.955.000.000 đ",
            discount: "40%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "50.900.000 đ",
            oldPrice: "65.900.000 đ",
            discount: "17%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "58.900.000 đ",
            oldPrice: "75.900.000 đ",
            discount: "20%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "60.900.000 đ",
            oldPrice: "75.350.000 đ",
            discount: "20%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "65.950.000.000 đ",
            oldPrice: "81.855.000.000 đ",
            discount: "20%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "69.950.000.000 đ",
            oldPrice: "91.855.000.000 đ",
            discount: "20%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "66.900.000 đ",
            oldPrice: "81.855.000.000 đ",
            discount: "20%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "69.900.000 đ",
            oldPrice: "85.855.000.000 đ",
            discount: "20%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        },  
        {
            name: "XPS Laptops & 2-in-1 PCs ",
            price: "88.050.000.000 đ",
            oldPrice: "1.155.000.000 đ",
            discount: "35%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "75.900.000 đ",
            oldPrice: "90.890.000 đ",
            discount: "15%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "85.050.000.000 đ",
            oldPrice: "92.450.000 đ",
            discount: "11%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "1.050.000.000 đ",
            oldPrice: "1.855.000.000 đ",
            discount: "43%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "564.540.000 đ",
            oldPrice: "679.540.000 đ",
            discount: "20%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "1.150.000.000 đ",
            oldPrice: "1.955.000.000 đ",
            discount: "40%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "2.250.000.000 đ",
            oldPrice: "2.555.000.000 đ",
            discount: "15%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        }, 
        {
            name: "XPS Laptops & 2-in-1 PCs",
            price: "2.450.000.000 đ",
            oldPrice: "2.755.000.000 đ",
            discount: "15%",
            imageSrc: "../image/laptop1.png",
            links: "../html/ChiTietSanPham.html"
        },
        // Thêm các sản phẩm khác vào đây
    ];

    var currentPage = 1; // Trang hiện tại
    var productsPerPage = 12; // Số sản phẩm trên mỗi trang

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
            var productPrice = parseFloat(product.price.replace(/[đ,\s]/g, '')); // Chuyển giá thành số

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

    // Hàm hiển thị danh sách sản phẩm
    function displayProducts(productsToDisplay) {
        var $productContainer = $("#product-container");
        $productContainer.empty(); // Xóa danh sách sản phẩm hiện tại

        // Thêm sản phẩm vào danh sách
        productsToDisplay.forEach(function (product) {
            var productHtml = '<div class="col-md-3">' +
                '<img class="hinh" src="' + product.imageSrc + '" alt="' + product.name + '">' +
                '<div class="ten-san-pham fix-2-line">' + product.name + '</div>' +
                '<div class="gia-san-pham gia col-md-10 p-0"> ' + product.price + '</div>' +
                '<div class="gia-san-pham-cu gia col-md-10 p-0"> ' + product.oldPrice + '</div>' +
                '<div class="giam-gia col-md-2 p-0"> ' + product.discount + '</div>' +
                '<a class="xem-them-link" href="' + product.links + '">Xem Thêm</a>' + // Thêm nút "Xem thêm" với href link sản phẩm
                '</div>';

            $productContainer.append(productHtml);
        });

        // Gắn sự kiện click vào nút "Xem thêm"
        $(".xem-them-link").click(function (e) {
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
