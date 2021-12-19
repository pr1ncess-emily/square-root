const sqrt = (num, precision) => {
    const getNumObj = num => {
        let obj = new Number(num);

        const isValidNumber = n => {
            if (isNaN(n)) {
                throw new TypeError("Input is not a number");
            } else if (n < 0 || n > (10**10)) {
                throw new RangeError("Input is not within a valid range");
            }
        }

        try {isValidNumber(obj)}
            catch (e) {throw(e)}
        return obj;
    }

    try {
        getNumObj(num);
        getNumObj(precision);
    } catch (e) {
        throw(e);
    }

    return getNumObj(num);
}
export default sqrt;