function carsInParking(list){
    let cars = new Map();

    for (let iterator of list) {
        let [command, carNumber] = iterator.split(', ');

        if (command == 'IN') {
            cars.set(carNumber, 1);
        } else {
            cars.delete(carNumber);
        }
    }

    if (cars.length == 0) {
        console.log("Parking is empty");
    } else {
        let array = Array.from(cars.keys());
        array.sort();
        for (let car of cars) {
            console.log(car);
        }
    }
}

carsInParking(['IN, CB8932AC', 'IN, CB8982AC', 'IN, CB5552AC', 'OUT, CB8932AC']);