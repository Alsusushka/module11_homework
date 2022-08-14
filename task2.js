function typeNumber(number) {
    if (number > 1000) {
        return 'данные неверны'
    }
    if (number == 1) {
        return 'число равно 1';
    }
    if (number == 0) {
        return 'число равно 0';
    }

    for (let j = 2; j < number; j++) {
        if (number % j == 0) {
            return 'число не простое';
        } 
    }

    return 'число простое';
}

let result = typeNumber(1);
console.log(result);