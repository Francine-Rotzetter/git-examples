
function add(first, second) {
    return first + second
}

function sub(first, second) {
    return first - second
}

function multiply(first, second) {
    return first * second
}

function pot(x, exponent) {
    let result = 1
    for (let i = 0; i < exponent; i++) {
      result *= x
    }
    return result
}

function div(a, b) {
    if (b == 0) {
        return undefined
    }
    return a / b
}

exports.sub = sub
exports.add = add
exports.multiply = multiply
exports.pot = pot
exports.div = div