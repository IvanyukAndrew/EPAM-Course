/**
 *
 * @param number1: {Number}
 * @param nunber2: {Number}
 * @returns {Number}
 */
module.exports.getSum = function getSum(number1, number2) {
    // Your implementation here

    const sum = number1 + number2;

    return sum;

    throw new Error("Task not implemented");
};

/**
 *
 * @param name: {String}
 * @param surname: {String}
 * @param age: {Number}
 * @returns {String}
 */
module.exports.greeting = function greeting(name, surname, age) {
    const sentence = `Hello, my name is ${name} ${surname} and I am ${age} years old.`;
    return sentence;

    throw new Error("Task not implemented");
};

/**
 *
 * @param x: {Number}
 * @returns {Boolean}
 */
module.exports.isSquare = function isSquare(x) {
    // Your implementation here

    const isSqrt = Math.sqrt(x) % 2 === 1 ? true : false;

    return isSqrt;

    throw new Error("Task not implemented");
};
