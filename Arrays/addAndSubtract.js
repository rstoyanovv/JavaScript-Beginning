function isEven(a){
    if(a % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}

function createNewArray(array){
    let modifiedArray = [];
    let n = array.length;
    let sumOfOldArray = 0;
    let sumOfNewArray = 0;

    for(let i = 0; i < n; i++) {
        sumOfOldArray += array[i];
        if(isEven(array[i])) {
            modifiedArray.push(array[i] + i);
        } else {
            modifiedArray.push(array[i] - i);
        }
    }

    let m = modifiedArray.length;
    for(let i = 0; i < m; i++){
        sumOfNewArray += modifiedArray[i];
    }

    console.log(modifiedArray.join(', '));
    console.log(sumOfOldArray);
    console.log(sumOfNewArray);
}

createNewArray([5, 15, 23, 56, 35]);