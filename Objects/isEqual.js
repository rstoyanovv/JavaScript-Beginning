function isEqual(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

const inputObj1 = {a: 2, b: 3};
const inputObj2 = {a: 2, b: 3};
const inputObj3 = {a: 5, b: 3};

console.log(isEqual(inputObj1, inputObj2));
console.log(isEqual(inputObj1, inputObj3));
