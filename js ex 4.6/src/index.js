/**
 * @param str: {String}
 * @param symbolsCount: {Number}
 * @returns {String}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
    const suffix = str.slice(-symbolsCount);
    return suffix + str + suffix;
};

/**
 * @param z: {Number}
 * @param x: {Number}
 * @param y: {Number}
 * @returns {Number}
 */
module.exports.nearest = function nearest(z, x, y) {
    const diffX = Math.abs(z - x);
    const diffY = Math.abs(z - y);
    return diffX < diffY ? x : y;
};

/**
 * @param arr: {Array}
 * @returns {Array}
 */
module.exports.removeDuplicate = function removeDuplicate(arr) {
    const uniqueValues = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueValues.includes(arr[i])) {
            uniqueValues.push(arr[i]);
        }
    }
    return uniqueValues;
};
