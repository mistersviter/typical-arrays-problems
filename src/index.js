
exports.min = function min (array) {
    if (arguments.length && array.length) {
        let minimum = Infinity;
        for (let i = 0; i < array.length; i++) {
            minimum = (array[i] < minimum) ? array[i] : minimum;
        }
        return minimum;
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (arguments.length && array.length) {
        let maximum = -Infinity;
        for (let i = 0; i < array.length; i++) {
            maximum = (array[i] > maximum) ? array[i] : maximum;
        }
        return maximum;
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if (arguments.length && array.length) {
        let average = 0;
        let summary = array.reduce(function (sum, current) {
            return sum + current;
        }, 0);
        average = summary / array.length;
        return average;
    } else {
        return 0;
    }
}
