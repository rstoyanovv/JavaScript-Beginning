function deepArray(obj) {
    let array = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key];
            array.push([key, value]);
        }
    }
    console.log(array);
}

deepArray({prop1: 2, prop2: 3, prop3: 4});
