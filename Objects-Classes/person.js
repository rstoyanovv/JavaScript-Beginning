let person = {
    name: 'John',
    age: 25,
     
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

person.sayHello();
console.log(person.name.split());
console.log(Object.entries(person));
