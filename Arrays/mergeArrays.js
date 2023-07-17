function isEven(a){
    if(a % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function merge(array1, array2) {
    let n = array1.length;
    let mergedArray = [];
    
    for (let i = 0; i < n; i++) {
        if(isEven(i)) {
            mergedArray.push(parseInt(array1[i]) + parseInt(array2[i]));
        } else {
            mergedArray.push(parseInt(array1[i]+array2[i]));
        }
    }

    console.log(mergedArray.join(' - '));
}

merge(['1', '13', '44', '21', '100'], ['67', '66', '22', '4', '100']);