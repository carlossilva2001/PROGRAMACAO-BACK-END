var exponencia = (a, b) => {
    result = 1
    for (var i = 0; i < b; i++) {
        result = result * a;
    }
    return result;
}
module.exports = exponencia;