function without(object, listOfRemoves) {
    arrayOfRemoves = listOfRemoves.split(', ');

    for (let key in object) {
        if(object.hasOwnProperty(key) && arrayOfRemoves.includes(key)){
            delete object[key];
        }
    }
    console.log(object);
}

without({a: 1, b: 2, c: 3, d: 4, f: 5}, 'b, d');
