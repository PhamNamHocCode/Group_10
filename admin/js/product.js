var products = [
  {
    name: "XPS 15 Laptop",
    price: "1.050.000.000 đ",
    oldPrice: "1.855.000.000 đ",
    discount: "43%",
    imageSrc: "../images/XPS_15_Laptop.jpeg",
    links: "../html/ChiTietSanPham.html",
  },
  {
    name: "XPS 17 Laptop",
    price: "38.180.000 đ",
    oldPrice: "51.855.000.000 đ",
    discount: "33%",
    imageSrc: "../images/XPS_17_Laptop.jpeg",
    links: "../html/ChiTietSanPham.html",
  },
  {
    name: "Precision 5480 Workstation",
    price: "38.840.000 đ",
    oldPrice: "58.840.000 đ",
    discount: "35%",
    imageSrc: "../images/Precision_5480_Workstation.jpeg",
    links: "../html/ChiTietSanPham.html",
  },
  {
    name: "Precision 3480 Workstation",
    price: "58.840.000 đ",
    oldPrice: "71.855.000.000 đ",
    discount: "15%",
    imageSrc: "../images/Precision_3480_Workstation.jpeg",
    links: "../html/ChiTietSanPham.html",
  },
  {
    name: "Precision 3470 Mobile Workstation",
    price: "1.250.000.000 đ",
    oldPrice: "1.955.000.000 đ",
    discount: "40%",
    imageSrc: "../images/Precision_3470_Workstation.png",
    links: "../html/ChiTietSanPham.html",
  },
  {
    name: "Latitude 3445 Chromebook",
    price: "50.900.000 đ",
    oldPrice: "65.900.000 đ",
    discount: "17%",
    imageSrc: "../images/Latitude_3445_Chromebook.png",
    links: "../html/ChiTietSanPham.html",
  },
  {
    name: "Inspiron 14 2-in-1 Laptop",
    price: "60.900.000 đ",
    oldPrice: "75.350.000 đ",
    discount: "20%",
    imageSrc: "../images/Inspiron_14_2-in-1 _Laptop.png",
    links: "../html/ChiTietSanPham.html",
  },
  {
    name: "XPS Laptops & 2-in-1 PCs",
    price: "65.950.000.000 đ",
    oldPrice: "81.855.000.000 đ",
    discount: "20%",
    imageSrc: "../images/XPS_13_2-in-1_Laptop.png",
    links: "../html/ChiTietSanPham.html",
  },
  {
    name: "XPS 13 Plus Laptop",
    price: "65.950.000.000 đ",
    oldPrice: "81.855.000.000 đ",
    discount: "20%",
    imageSrc: "../images/XPS_13_Plus_Laptop.jpeg",
    links: "../html/ChiTietSanPham.html",
  },
  // Thêm các sản phẩm khác vào đây
];

function setLocalStorage() {
  let productsStorage = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];

  localStorage.setItem("products", JSON.stringify(products));
  renderProducts();
}

function renderProducts() {
  let productsStorage = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];
  let product = `<tbody id="product-content">
  </tbody>`;

  productsStorage.map((value, index) => {
    product += `<tbody id="product-content">
    <tr>
    <td>${index + 1}</td>
    <td>${value.name}</td>
    <td>
    <img
        src="${value.imageSrc}"
        alt="${value.name}"
        width="100px"
        height="auto"
    />
    </td>
    <td>${value.price}</td>
    </td>
    <td>
    <a
        href="#"
        class="btn btn-secondary btn-sm"
        >Chi tiết</a
    >
    <a
        href="#"
        class="btn btn-warning btn-sm"
        >Sửa</a
    >
    <button
        class="btn btn-danger btn-sm ml-1"
        button-delete
        data-id="item.id"
    >
        Xóa
    </button>
    </td>
    </tr>
    </tbody>`;

    document.getElementById("product-content").innerHTML = product;
  });
}

setLocalStorage();
