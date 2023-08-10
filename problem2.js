
// function matchFinder(string1, string2) {
// }

console.log("Exact string1 found: ", matchFinder("John", "ohn"))

console.log("Exact string1 found: ", matchFinder("JavaScript", "Code"))

console.log("Exact string1 found: ", matchFinder("Peter Parker", "Pen"))

console.log("Exact string1 found: ", matchFinder("Peter Parker", "pet"))

console.log("Exact string1 found: ", matchFinder("Peter Parker", 123))



function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Please input string data";
    }
    console.log("search for ", string2, " in ", string1);

    for (let i = 0; i < string2.length; i++) {
        if (string1.indexOf(string2[i]) === -1) {
            return false;
        }
    }
    
    return true;
}

