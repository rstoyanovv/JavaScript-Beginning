function typeOfVariable(variable){
    let type = typeof(variable);
    console.log(type);
    if(type == 'string' || type == 'number'){
        console.log(variable);
    } else{
        console.log("Undefined");
    }
}

typeOfVariable("Hello");
typeOfVariable(18);
typeOfVariable(null);
