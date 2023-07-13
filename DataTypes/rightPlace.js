function isMatched(string, symbol, matchString){
    let newString = '';
    for(let i = 0; i < string.length; i++){
       if(string[i] == '_'){
            newString +=symbol;
        } else {
            newString += string[i];
        }
    }

    if(newString == matchString){
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}
isMatched('Str_ng', 'I', 'Strong');
isMatched('Str_ng', 'i', 'String');