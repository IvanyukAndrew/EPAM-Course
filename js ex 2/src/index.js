/**
 *
 * @param number1: {Number}
 * @param number2: {Number}
 * @param number3: {Number}
 * @returns {Number}
 */
module.exports.getMin = function getMin(number1, number2, number3) {
    // Your implementation here

    const result = Math.min(number1, number2, number3);

    return result;

    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.evenOrOdd = function evenOrOdd(x, y, z) {
    // Your implementation here

    const even = x % 2 === 0 && y % 2 === 0 && z % 2 === 0;
    const odd = x % 2 !== 0 && y % 2 !== 0 && z % 2 !== 0;
    return even ? "even" : odd ? "odd" : "even/odd";

    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @param y: {Number}
 * @param z: {Number}
 * @returns {String}
 */
module.exports.inOrOutRange = function inOrOutRange(x, y, z) {
    // Your implementation here

    if (z >= x && z <= y) {
        return "In range";
    } else {
        return "Out of range";
    }

    throw new Error("Task not implemented");
};
