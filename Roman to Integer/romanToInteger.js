const romanNumberPoints = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

const calculator = (s) => {
    let total = 0;
    let temp = 0;
    let len = s.length - 1
    let lock = false
    Array.from(s).forEach((e, i) => {
        if (lock) {
            lock = false
            return
        }
        let next = romanNumberPoints[s[i + 1]]
        let current = romanNumberPoints[e]
        if (next > current) {
            total += (next - current);
            lock = true
        } else {
            total += current;
        }
    })

    return total;
}
var romanToInt = function (s) {
    return calculator(s)
};