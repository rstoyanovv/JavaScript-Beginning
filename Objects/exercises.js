function doubleNumbers(array){
    return array.map(x => x * 2);
}
  
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

function toStrings(array){
    return array.map(x => x.toString());
}
console.log(toStrings([2, 4, 23])); 

function printNames(array){
    return array.map(person => `Name: ${person.name}`);
}
console.log(printNames([{ name: "Angelina Jolie", age: 80}, { name: "Eric Jones", age: 2}])); 

function DOM(array){
    return array.map(person => `<h1>${person.name}</h1><h2>${person.age}</h2>`);
}
console.log(DOM([{ name: "Angelina Jolie", age: 80}, { name: "Eric Jones", age: 2}])); 

