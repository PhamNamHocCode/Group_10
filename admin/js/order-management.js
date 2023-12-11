let accounts = [
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

function showNotification() {
  let notification = document.getElementById("delete-success");
  document.getElementById("delete-success").style.visibility = "visible";
  setTimeout(() => {
    document.getElementById("delete-success").style.visibility = "hidden";
  }, 3000);
  console.log(notification);
}

let currentPageOrder = sessionStorage.getItem("currentPageOrder")
  ? sessionStorage.getItem("currentPageOrder")
  : 1;
let itemsPerPage = 20;

function renderProducts() {
  let __accounts = localStorage.getItem("accounts")
    ? JSON.parse(localStorage.getItem("accounts"))
    : [];

  let __products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : [];

  let orderList = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  let orderProducts = [];
  orderList.forEach((order) => {
    let foundOrder = __products.find((product) => product.id === order.id);

    if (foundOrder) {
      foundOrder.quantity = order.item;
      foundOrder.processed = order.processed;
      orderProducts.push(foundOrder);
    }
  });
  let product = `<tbody id="product-content">
      </tbody>`;

  let start = (currentPageOrder - 1) * itemsPerPage;
  let end = start + itemsPerPage;

  let paginatedOrders = orderProducts.slice(start, end);

  const names = [
    "Phạm Nam",
    "Quý Hùng",
    "Kim Ngọc",
    "Hùng Dũng",
    "Nguyễn Nam",
    "Khánh Linh",
    "Thu Hà",
  ];

  let currentNameIndex = 0;
  console.log(orderList[0].date);
  orderList = [];
  paginatedOrders.map((value, index) => {
    const randomName = names[currentNameIndex];

    const randomDate = "2032-12-16";

    currentNameIndex = (currentNameIndex + 1) % names.length;

    const numericPrice = parseFloat(value.price.replace(/[^0-9.]/g, ""));
    product += `<tbody id="product-content">
        <tr>
        <td><input type="checkbox" class="checkbox" id=${value.id} ${
      value.processed ? "checked" : ""
    }/></td>
        <td>${randomName}</td>
        <td>${value.name}$</td>
        <td>
        <a href="detail.html?id=${value.id}">
          <img
            src="${value.imageSrc}"
            alt="${value.name}"
            width="100px"
            height="auto"
          />
        </a>
        </td>
        <td>${value.id}</td>
        <td>
          <div style="
            display: inline-block;
            padding: 5px;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            border-radius: 5px;
            color: #333;
            font-family: Arial, sans-serif;
            cursor: default;
            pointer-events: none;
            outline: none;
            "id="dateInput">${randomDate}
          </div>
        </td>
        <td>${numericPrice * value.quantity}$</td>
        <td>${value.quantity}</td>
        </td>
        <td>
        <a
            href="detail-order.html?id=${value.id}"
            class="btn btn-secondary btn-sm detail-button">
            <i class="bi bi-eye"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
              <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
            </svg>
        </a>

        </td>
        </tr>
        </tbody>`;

    let randomPaymentNo = Math.floor(Math.random() * 1000000) + 1;

    let productInfo = {
      id: value.id,
      customer: randomName,
      nameProduct: value.name,
      imageSrc: value.imageSrc,
      orderID: value.id,
      date: randomDate,
      totalPrice: numericPrice * value.quantity,
      item: value.quantity,
      randomPaymentNo: randomPaymentNo,
      processed: value.processed,
    };

    orderList.push(productInfo);

    localStorage.setItem("data", JSON.stringify(orderList));

    document.getElementById("product-content").innerHTML = product;
  });

  renderPagination(orderProducts.length, itemsPerPage);

  let checkboxes = document.getElementsByClassName("checkbox");

  Array.from(checkboxes).forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      let productId = checkbox.id;

      let foundOrder = orderList.find((order) => order.id === productId);

      if (foundOrder) {
        foundOrder.processed = checkbox.checked;

        localStorage.setItem("data", JSON.stringify(orderList));

        if (checkbox.checked) {
          Swal.fire({
            title: "Thông báo",
            text: `Sản phẩm đã được xử lý.`,
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Thông báo",
            text: `Sản phẩm đã được bỏ xử lý.`,
            icon: "info",
          });
        }
      }
    });
  });
}

function renderPagination(totalItems, itemsPerPage) {
  let totalPages = Math.ceil(totalItems / itemsPerPage);

  let pagination = '<div id="pagination">';

  for (let i = 1; i <= totalPages; i++) {
    let activeClass = "";
    if (i === currentPageOrder) {
      activeClass = "active";
    }

    pagination += `<button class="page-button ${activeClass}" value="${i}">${i}</button>`;
  }

  pagination += "</div>";

  document.getElementById("product-content").innerHTML += pagination;

  let currentPageOrderButton = document.querySelector(
    `.page-button[value="${currentPageOrder}"]`
  );

  if (currentPageOrderButton) {
    currentPageOrderButton.classList.add("active");
  }

  sessionStorage.setItem("currentPageOrder", currentPageOrder);

  let buttonsPage = document.getElementsByClassName("page-button");
  Array.from(buttonsPage).forEach((buttonPage) => {
    buttonPage.addEventListener("click", () => {
      currentPageOrder = Number(buttonPage.value);
      renderProducts();
    });
  });
}

function setLocalStorage() {
  //Products
  if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify(products));
    renderProducts();
    setUser();
  }
  if (localStorage.getItem("newProducts")) {
    var newProducts = localStorage.getItem("newProducts");
    localStorage.setItem("products", newProducts);
    localStorage.removeItem("newProducts");
  }
  //Accounts
  if (!localStorage.getItem("accounts")) {
    localStorage.setItem("accounts", JSON.stringify(accounts));
    renderProducts();
    setUser();
  }
  renderProducts();
  setUser();
}

function setUser() {
  let userName = document.getElementById("user-account");

  if (userName) {
    let __accounts = localStorage.getItem("accounts")
      ? JSON.parse(localStorage.getItem("accounts"))
      : [];

    let User = __accounts.find(
      (account) => account.username == localStorage.getItem("token")
    );

    if (User) {
      userName.href = `../html/user.html?id=${User.id}`;
      userName.innerText = localStorage.getItem("token");
    }
  } else {
    console.error("Element with id 'user-account' not found.");
  }
}

function logout() {
  localStorage.removeItem("token");
  location.reload();
  window.location.replace("../html/login.html");
}

function renderFilteredProducts() {
  const startDate = document.getElementById("start_date").value;
  const endDate = document.getElementById("end_date").value;

  if (!startDate) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Vui lòng nhập ngày bắt đầu!",
    });
    return; // Dừng hàm nếu chưa nhập start_date
  }
  const shuffledProducts = shuffle(products);

  const filteredProducts = shuffledProducts.slice(0, 5);

  renderProducts2(filteredProducts, startDate, endDate);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function renderProducts2(filteredProducts, startDate, endDate) {
  addProperty(filteredProducts, startDate);
  console.log(filteredProducts);
  localStorage.setItem("data", JSON.stringify(filteredProducts));
  window.location.reload(true);
}

function addProperty(objects, startDate) {
  const names = [
    "Phạm Nam",
    "Quý Hùng",
    "Kim Ngọc",
    "Hùng Dũng",
    "Nguyễn Nam",
    "Khánh Linh",
    "Thu Hà",
  ];

  objects.forEach((obj) => {
    obj.item = Math.floor(Math.random() * 10) + 1;
    obj.date = startDate;
    obj.nameProduct = obj.name;
    obj.orderID = obj.id;

    delete obj.description;
    delete obj.discount;
    delete obj.links;
    delete obj.type;
    delete obj.oldPrice;
    delete obj.name;

    const randomNameIndex = Math.floor(Math.random() * names.length);
    obj.customer = names[randomNameIndex];

    obj.randomPaymentNo = Math.floor(Math.random() * 90000) + 10000;
    obj.processed = Math.random() < 0.5;

    const numericPrice = parseFloat(obj.price.replace(/[^0-9.]/g, ""));
    obj.totalPrice = numericPrice * obj.item;
    delete obj.price;
  });
}

document
  .getElementById("filter_button")
  .addEventListener("click", renderFilteredProducts);

document.addEventListener("DOMContentLoaded", function () {
  setLocalStorage();
  setUser();

  var token = localStorage.getItem("token");

  if (!token) {
    alert("Bạn chưa đăng nhập. Chuyển hướng đến trang đăng nhập...");
    window.location.href = "../html/login.html";
  }

  if (localStorage.getItem("token") === null) {
    setUser();
    window.location.replace("../html/login.html");
  }
});
