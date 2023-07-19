function countOfWords(array){
    let words = array.shift().split(' ');
    let object = {};

    for (let word of words) {
        object[word] = 0;
    }

    console.log(object);

    for(let word of array){
        if(object.hasOwnProperty(word)){
            object[word]++;
        }
    }
    
    console.log(Object.entries(object));
}

countOfWords(['this sentence', 'car', 'this', 'how', 'words', 'sentence', 'words', 'this', 'this']);