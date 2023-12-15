let laptopSrc = "../html/SanPhamLaptop_lite.html";
let pcSrc = "../html/SanPhamPC_lite.html";
function search(){
    let value = document.getElementById("productType").value;
    let src = "../html/index.html";
    if(value == "laptop") src = laptopSrc;
    else if(value == "computer") src = pcSrc;

    // document.getElementById("out").innerText = src;
    window.location.href = src;
}