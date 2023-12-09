let __accounts = [
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
let products = [
  {
    id: "product1",
    name: "PC WORKSTATION DUAL AMD EPYC 7742: 256 THREADS | DUAL VGA",
    price: "200 $",
    oldPrice: " 300 $",
    discount: "43%",
    imageSrc: "../image/hinh1.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product2",
    name: "PC WORKSTATION X99-T8D/E3-2673/64G DDR3/PSU650/1SP P7",
    price: "1950 $",
    oldPrice: "2250 $",
    discount: "33%",
    imageSrc: "../image/hinh2.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product3",
    name: "PC WORKSTATION X99-T8D/E3-2673/64G DDR3/PSU650/1SP P7",
    price: "3884 $",
    oldPrice: "5884 $",
    discount: "35%",
    imageSrc: "../image/hinh3.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product4",
    name: "PC WORKSTATION X99-T8D/E3-2673/64G DDR3/PSU650/1SP P8",
    price: "3884 $",
    oldPrice: "5884 $",
    discount: "15%",
    imageSrc: "../image/hinh4.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product5",
    name: "PC WORKSTATION X99-T8D/E3-2673/128G DDR3/PSU650/1SP P8",
    price: "1250 $",
    oldPrice: "1955 $",
    discount: "40%",
    imageSrc: "../image/hinh4.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product6",
    name: "PC WORKSTATION X99/E3-2680/32G DDR3/PSU550/JT9605B",
    price: "5090 $",
    oldPrice: "6590 $",
    discount: "17%",
    imageSrc: "../image/hinh3.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product7",
    name: "PC WORKSTATION X99/E3-2680/64G DDR3/PSU550/JT9605B",
    price: "5890 $",
    oldPrice: "7590 $",
    discount: "20%",
    imageSrc: "../image/hinh3.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product8",
    name: "PC WORKSTATION X79/E3-2670/32G DDR3/PSU550/JT9331",
    price: "6090 $",
    oldPrice: "7535 $",
    discount: "20%",
    imageSrc: "../image/hinh3.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product9",
    name: "PC WORKSTATION X79/E3-2670/64G DDR3/PSU550/JT9331",
    price: "6595 $",
    oldPrice: "8185 $",
    discount: "20%",
    imageSrc: "../image/hinh3.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product10",
    name: "PC WORKSTATION X79/E3-2670/128G DDR3/PSU550/JT9331",
    price: "6995 $",
    oldPrice: "9185 $",
    discount: "20%",
    imageSrc: "../image/hinh3.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product11",
    name: "PC Workstation T90 – Core i9 13900K | 64G | RTX3090 24GB | 2TB SSD",
    price: "6690 $",
    oldPrice: "8185 $",
    discount: "20%",
    imageSrc: "../image/hinh5.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product12",
    name: "PC Workstation T90 – Core i9 13900K | 128G | RTX3090 24GB | 2TB SSD",
    price: "6990 $",
    oldPrice: "8585 $",
    discount: "20%",
    imageSrc: "../image/hinh5.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product13",
    name: "PC Gaming STAR CHICKEN AQUA | RTX 3060TI, Intel | RTX3090 32GB | 2TB SSD ",
    price: "8805 $",
    oldPrice: "11155 $",
    discount: "35%",
    imageSrc: "../image/hinh6.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product14",
    name: "PC NCPC Virtualization 01 (Xeon 6138/ Z11PA-D8C/ 32GB/ SSD 1TB/ 700W)",
    price: "7590 $",
    oldPrice: "9089 $",
    discount: "15%",
    imageSrc: "../image/hinh7.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product15",
    name: "PC NCPC Virtualization 01 (Xeon 6138/ Z11PA-D8C/ 64GB/ SSD 1TB/ 700W)",
    price: "8505 $",
    oldPrice: "9245 $",
    discount: "11%",
    imageSrc: "../image/hinh8.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product16",
    name: "PC Workstation Machine Learning VIP (5955WX/ WRX80E/ 128G/ 2TB/ 10TB HDD/ 4X RTX 4090/ 2000W)",
    price: "1050 $",
    oldPrice: "1855 $",
    discount: "43%",
    imageSrc: "../image/hinh9.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product17",
    name: "PC - MACHINE LEARNING 03 (5995WX/ WRX80E/ 256GB RAM/ 20TB SSD/ 3X RTX 4090 O24G/ 2000W)",
    price: "5654 $",
    oldPrice: "6754 $",
    discount: "20%",
    imageSrc: "../image/hinh10.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product18",
    name: "PC HOTGEAR AMD Ryzen 9 / Ryzen 9 7900X / MAIN B650/ DDR4 16GB / SSD 250GB M.2 NVME",
    price: "1150 $",
    oldPrice: "1955 $",
    discount: "40%",
    imageSrc: "../image/hinh11.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product19",
    name: "PC GAMING AMD Ryzen 9 / Ryzen 9 9900X / MAIN B650/ DDR4 128GB / SSD 2TB M.2 NVME",
    price: "2250 $",
    oldPrice: "2555 $",
    discount: "15%",
    imageSrc: "../image/hinh12.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product20",
    name: "PC GAMING AMD Ryzen 9 / Ryzen 9 9900X / MAIN B650/ DDR4 256GB / SSD 2TB M.2 NVME",
    price: "2450 $",
    oldPrice: "2755 $",
    discount: "15%",
    imageSrc: "../image/hinh14.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "PC",
  },
  {
    id: "product21",
    name: "XPS 15 Laptop",
    price: "1050 $",
    oldPrice: "1855 $",
    discount: "43%",
    imageSrc: "../image/anhlaptop1.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "Laptop",
  },
  {
    id: "product22",
    name: "XPS 17 Laptop",
    price: "3818 $",
    oldPrice: "5185 $",
    discount: "33%",
    imageSrc: "../image/anhlaptop2.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "Laptop",
  },
  {
    id: "product23",
    name: "Precision 5480 Workstation",
    price: "3884 $",
    oldPrice: "5884 $",
    discount: "25%",
    imageSrc: "../image/anhlaptop3.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "Laptop",
  },
  {
    id: "product24",
    name: "Precision 3480 Workstation",
    price: "5884 $",
    oldPrice: "7185 $",
    discount: "15%",
    imageSrc: "../image/anhlaptop4.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "Laptop",
  },
  {
    id: "product25",
    name: "Precision 3470 Mobile Workstation",
    price: "1250 $",
    oldPrice: "1955 $",
    discount: "40%",
    imageSrc: "../image/anhlaptop5.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "Laptop",
  },
  {
    id: "product26",
    name: "Latitude 3445 Chromebook",
    price: "5090 $",
    oldPrice: "6590 $",
    discount: "17%",
    imageSrc: "../image/anhlaptop6.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "Laptop",
  },
  {
    id: "product27",
    name: "Inspiron 14 2-in-1 Laptop",
    price: "5890 $",
    oldPrice: "7590 $",
    discount: "20%",
    imageSrc: "../image/anhlaptop7.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "Laptop",
  },
  {
    id: "product28",
    name: "XPS 15 Laptop",
    price: "1050 $",
    oldPrice: "1855 $",
    discount: "43%",
    imageSrc: "../image/anhlaptop1.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "Laptop",
  },
  {
    id: "product29",
    name: "XPS 17 Laptop",
    price: "3818 $",
    oldPrice: "5185 $",
    discount: "33%",
    imageSrc: "../image/anhlaptop2.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "Laptop",
  },
  {
    id: "product30",
    name: "Precision 5480 Workstation",
    price: "3884 $",
    oldPrice: "5884 $",
    discount: "25%",
    imageSrc: "../image/anhlaptop3.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "Laptop",
  },
  {
    id: "product31",
    name: "Precision 3480 Workstation",
    price: "5884 $",
    oldPrice: "7185 $",
    discount: "15%",
    imageSrc: "../image/anhlaptop4.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "Laptop",
  },
  {
    id: "product32",
    name: "Precision 3470 Mobile Workstation",
    price: "1250 $",
    oldPrice: "1955 $",
    discount: "40%",
    imageSrc: "../image/anhlaptop5.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "Laptop",
  },
  {
    id: "product33",
    name: "Latitude 3445 Chromebook",
    price: "5090 $",
    oldPrice: "6590 $",
    discount: "17%",
    imageSrc: "../image/anhlaptop6.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "Laptop",
  },
  {
    id: "product34",
    name: "Inspiron 14 2-in-1 Laptop",
    price: "5890 $",
    oldPrice: "7590 $",
    discount: "20%",
    imageSrc: "../image/anhlaptop7.png",
    description: {
      Processor:
        "13th Gen Intel® Core™ i9-13900H (24 MB cache, 14 cores, up to 5.40 GHz Turbo)",
      Graphics: "NVIDIA® GeForce RTX™ 4070, 8 GB GDDR6",
      Memory: "64 GB: 2 x 32 GB, DDR5, 4800 MT/s, dual-channel",
      Storage: "8 TB (2 x 4 TB), M.2, PCIe NVMe, SSD",
    },
    links: "../html/ChiTietSanPham.html",
    type: "Laptop",
  },
];

function renderProducts() {
  let productsStorage = products;
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
    products = data;
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
