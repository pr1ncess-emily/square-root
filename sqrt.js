const sqrt = (num, precision) => {
    const getNumObj = num => {
        let obj = new Number(num);
        if (isNaN(obj)) {
           throw new TypeError("Input is not a number");
        }
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