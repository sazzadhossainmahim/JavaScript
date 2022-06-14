var sales = 'Toyota';

function carTypes(name) {
    if (name === 'Honda') {
        return name;
    } else {
        return "sorry, we don't sell " + name + ".";

    }

}

var car = {
    myCar: 'Saturn',
    getCar: carTypes('Hoda'),
    special: sales
};
console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);