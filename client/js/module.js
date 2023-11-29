var myModule = (function(){
    function getLaptopProducts(products) {
        const laptopProducts = products.filter(
          (product) => product.type === "Laptop"
        );
        return laptopProducts;
    }
    
    return {
        getLaptopProducts : getLaptopProducts
       
    };
})();
var myModule1 = (function(){
    function getPcProducts(products) {
        const laptopProducts = products.filter(
          (product) => product.type === "PC"
        );
        return laptopProducts;
    }
    
    return {
        getPcProducts : getPcProducts
       
    };
})();