var products = [
  {
    name: "XPS 15 Laptop",
    price: "1.050.000.000 đ",
    oldPrice: "1.855.000.000 đ",
    discount: "43%",
    imageSrc: "../images/XPS_15_Laptop.jpeg",
    links: "../html/ChiTietSanPham.html",
    description: `
    <b>Processor</b>: 13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo) <br>
    <b>Graphics</b>: NVIDIA® Ge Force RTX™ 4070, 8 GB GDDR6 <br>
    <b>Memory</b>: 64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel <br>
    <b>Storage</b>: 8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD <br>
    <b>Display</b>: 15.6", 3.5K 3456x2160, 60Hz, OLED, Touch, Anti-Reflect, 400 nit, InfinityEdge <br>
    <b>Color</b>: Platinum Silver exterior, Black interior <br>
    <b>System Management</b>: Intel® vPro Technology Essential Management Features
    `,
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
    imageSrc: "../images/Inspiron_14_2-in-1_Laptop.png",
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
  let product = `<div class="main">
  </div>`;

  productsStorage.map((value, index) => {
    product += `<div class="main">
        <h1 class="mb-4">${value.name}</h1>
        <div class="mb-4">
          <img src=${value.imageSrc} alt="${value.name}" style="width: 100px" />
        </div>
        <h1 class="mb-4">${value.price}</h1>
        <h1 class="mb-4">${value.discount}</h1>
        <h1 class="mb-4" id="description"> <b> Description </b> <br>
          <p id="description-content">${value.description}</p>
        </h1>

    </div>`;

    document.getElementById("detail-content").innerHTML = product;
  });
}

setLocalStorage();
