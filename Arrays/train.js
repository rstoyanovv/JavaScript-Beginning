function train(train){
    let passengerInTheWagons = train.shift().split(" ").map(Number);
    let maxCapacity = parseInt(train.shift());

    for (const command of train) {
        let currentCommand = command.split(" ");

        if(currentCommand[0] === "Add") {
            passengerInTheWagons.push(parseInt(currentCommand[1]));
        } else {
            for(let i = 0; i < passengerInTheWagons.length; i++) {
                if((passengerInTheWagons[i] + parseInt(currentCommand[0])) <= maxCapacity) {
                    passengerInTheWagons[i] += parseInt(currentCommand[0]);
                    break;
                }
            }
        }
    }

    console.log(passengerInTheWagons.join(" "));

}

train(["20 23 21 12 56 0 44", "60", "Add 10", "Add 100", "34", "13", "55"]);