function deepIsEqual(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if(!keys2.includes(key) || !deepIsEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

const inputObj4 = {a: 4, b: {g: 3, j: 4}, c: 5};
const inputObj5 = {a: 4, b: {g: 3, j: 4}, c: 5};
const inputObj6 = {a: 4, b: {g: 5, h: 4}};

console.log(deepIsEqual(inputObj4, inputObj5));
console.log(deepIsEqual(inputObj4, inputObj6));
