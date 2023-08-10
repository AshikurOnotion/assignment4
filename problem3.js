
function sortMaker(arr) {
    if (!Array.isArray(arr) || arr.length !== 2) {
        return "invalid Input";
    }

    const [num1, num2] = arr;

    if (num1 < 0 || num2 < 0) {
        return "invalid Input";
    } else if (num1 === num2) {
        return "equal";
    } else {
        const sortedArr = [num1, num2].sort((a, b) => b - a);
        return sortedArr;
    }
}
console.log (sortMaker([4,2]))
console.log (sortMaker([1,2]))