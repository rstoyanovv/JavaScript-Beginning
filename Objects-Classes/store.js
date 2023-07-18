function store (stock, ordered){
    let storedProducts = {};
    for(let i = 0; i < stock.length; i+=2){
        let currentProduct = stock[i];
        storedProducts[currentProduct] = parseInt(stock[i+1]);
    }

    for(let i = 0; i < ordered.length; i+=2){
        let currentProduct = ordered[i];
        if(!storedProducts.hasOwnProperty(currentProduct)){
            storedProducts[currentProduct] = 0;

        }
        storedProducts[currentProduct] += parseInt(ordered[i+1]);
    }

    for (let product in storedProducts) {
        console.log(`${product} -> ${storedProducts[product]}`);
    }
     
}

store(["Chips", "5", "Apples", "12", "Bananas", "15"],
["Beer", "6", "Bananas", "7", "Tomatoes", "8"]);
