 module.exports = function getZerosCount(number, base) {
    let zeroCount = number;
    let currentBase = base;
    let currentNumber = number;
    let numberZeroCount = 0;
    let baseZeroCount = 0;
    for (let i = 2; i <= base; i++) {
        if (currentBase % i === 0) {
            numberZeroCount = 0;
            while (currentNumber / i > 0) {
                currentNumber = Math.floor(currentNumber / i);
                numberZeroCount += currentNumber;
            }
            currentNumber = number;
            baseZeroCount = 0;
            while (currentBase % i === 0) {
                baseZeroCount++;
                currentBase = Math.floor(currentBase / i);
            }
            zeroCount = Math.floor(Math.min(zeroCount, numberZeroCount / baseZeroCount));
        }
    }
    return zeroCount;
};
