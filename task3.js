function numberOne(number) {
    return function(numberTwo) {
        console.log(number + numberTwo);
    }
}

const sum = funcOne(5);

sum(12);