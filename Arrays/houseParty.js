function party(list){
    let listOfGuests = [];
    //let listOfNoGuests = [];
    for (const iterator of list) {
        let commands = iterator.split(" ");
        let name = commands[0];
        if(commands.length === 3){
            let isInList = listOfGuests.includes(name);
            if(isInList) {
                console.log(`${name} is already in the list`);
            } else {
                listOfGuests.push(name);
            }
        } else{
            let indexOfPerson = listOfGuests.indexOf(name);
            if(indexOfPerson !== -1) {
                listOfGuests.splice(indexOfPerson, 1);
            } else {
                console.log(`${name} is not in the list`);
            }
        }    
    }
    console.log(listOfGuests.join("\n"));
}

party(["Alice is going!", "George is going!", "Bob is not going!", "George is not going!"]);