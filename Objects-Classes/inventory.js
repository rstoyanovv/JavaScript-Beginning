function inventory(list){
    let names = [];

    for (const iterator of list) {
        let info = iterator.split(" / ");
        let currentName = info[0];
        let currentQuantity = parseInt(info[1]);
        let currentFruits =   info[2].split(", ").join(", ");

        let currentMan = {
            name: currentName,
            quantity: currentQuantity,
            fruits: currentFruits
        }

        names.push(currentMan);
    }
    names.sort((a, b) => a.quantity - b.quantity);
    for (const iterator of names) {
            console.log(`Name: ${iterator.name}`);
            console.log(`Quantity: ${iterator.quantity}`);
            console.log(`Fruits: ${iterator.fruits}`);
        }
}

inventory(["John / 20 / Apple, Banana",
    "Peter / 12 / Peach, Plum",
    "David / 23 / Orange, Peach"]);