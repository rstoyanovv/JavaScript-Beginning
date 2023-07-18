function employees (list) {
    let listOfNames = {};
    for (let employee of list) {
        listOfNames.name = employee;
        listOfNames.personalNumber = employee.length;
        console.log(`Name: ${listOfNames.name} --- Personal Number: ${listOfNames.personalNumber}`);
    }

    
}

employees (["Ivan Stoyanov", "Atanas Atanasov", "Tanya Angelova", "Nadya Georgieva"]);