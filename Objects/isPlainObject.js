function isPlainObject(obj){
    if(typeof obj === 'object' && obj !== null && !Array.isArray(obj)) {
        console.log("True");
    } else {
        console.log("False");
    }
}

isPlainObject({prop: 3});
isPlainObject([5, 3, 22]);
