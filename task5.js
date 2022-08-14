const exponentiation = (x, n) => {
    let product = 1;
    for(let i = 0; i < n; i++) {
        product *= x;
    }
    return product;
}

console.log(exponentiation(3,3));