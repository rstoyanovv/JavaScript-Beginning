function reverse (array, n){
    let revArray = [];

    if(n > array.length || n < 0){
        throw new Error("Number 'n' is invalid. Too large or negative");
    }

    for(let i = 0; i < n; i++){
        revArray.push(array[i]);
    }

    let reversePrintArray = [];
    for(let i = revArray.length - 1; i >= 0; i--){
        reversePrintArray.push(revArray[i]);
    }
    console.log(reversePrintArray.join(' '));
}

try {
    reverse([10, 20, 30, 40, 50], 3);
    reverse([10, 20, 30, 40, 50], 10);
  } catch (error) {
    console.error("Error:", error.message);
}