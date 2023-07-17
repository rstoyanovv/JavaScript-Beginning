function swap(array, a, b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}

function reverseElementsOfArray(array){
    let n = array.length;
    for(let i = 0; i < n/2; i++){
        swap(array, i, n-i-1);
    }
    console.log(array);
}

reverseElementsOfArray([1,2,3,4,5]);

