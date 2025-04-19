
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 156.5;
    // return the dollar value
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInPound = valueInYen * .87;
    // return the dollar value
    return valueInPound;
}


const sum = (a, b) => {
    return a + b;
}
console.log(sum(7, 3));
console.log(valueInPound);

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };