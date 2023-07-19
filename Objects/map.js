let listOfPeople = new Map(
    [
        ['John', 30],
        ['Mary', 25],
        ['Peter', 20],
    ]
);

console.log(listOfPeople.size);

listOfPeople.set('Carla', 20);
console.log(listOfPeople);
console.log(listOfPeople.has('Mary'));
console.log(listOfPeople.has(45));
