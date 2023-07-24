let city = {
    name: "Sofia",
    area: 492,
    population: 123456789,
    country: "Bulgaria",
    postCode: "1000"
}

function printCity(city) {
    const keys = Object.keys(city);

    for (let key of keys) {
        console.log(`${key} -> ${city[key]}`);
    }
}
printCity(city);
