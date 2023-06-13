
function add(first, second) {
    return first + second
}

function sub(first, second) {
    return first - second
}

function div(a, b) {
    if (b == 0) {
        return undefined
    }
    return a / b
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

exports.add = add
exports.sub = sub
exports.div = div
exports.multiply = multiply
exports.pot = pot