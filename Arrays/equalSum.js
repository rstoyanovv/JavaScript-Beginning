function equalSum(array){
    let hasEqual = false;

    let n = array.length;
    for(let i = 0; i < n; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for(let j = i - 1; j >= 0; j--) {
            leftSum += array[j];
        }

        for(let num = i + 1; num < n; num++) {
            rightSum += array[num];
        }

        if(leftSum === rightSum) {
            console.log(i);
            hasEqual = true;
        }
    }
    if(!hasEqual){
        console.log('no');
    }
}

equalSum([1, 2, 3, 3]);
equalSum([1, 2, 3, 5, 3, 2]);