
exports.min = function min (array) {
    if (array  && array.length) {
        let minimum = Infinity;
        for (let value of array) {
            minimum = (value < minimum) ? value : minimum;
            value +=1;
        }
        return minimum;
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (array  && array.length) {
        let maximum = -Infinity;
        for (let value of array) {
            maximum = (value > maximum) ? value : maximum;
            value +=1;
        }
        return maximum;
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
    if (array  && array.length) {
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
