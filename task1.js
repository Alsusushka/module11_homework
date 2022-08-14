let arr = [1, 2, 3, 'str', 5, 0];
function typeNumber(array) {
    let even = 0;
    let odd = 0;
    let notNumber = 0;
    let zero = 0;
    
    array.forEach((item, index) => {
        let value = +item;
        if (isNaN(value)) {
            notNumber++;
        } else {
            if (zero === 0) {
                zero++
            } else {
                if (value % 2) {
                    odd++;
                } else {
                    even++;
                }
            }
        }
    });
    console.log('нечётное - ' + odd);
    console.log('чётное - ' + even);
    console.log('не числа - ' + notNumber);
    console.log('нули - ' + zero);
}
typeNumber(arr);