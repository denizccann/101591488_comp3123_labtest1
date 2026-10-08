const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input must be an array");
            return;
        }const result = mixedArray
            .filter(item => typeof item === 'string')
            .map(word => word.toLowerCase());    
        if (result.length >= 0) {
            resolve(result); } else { reject("No valid string words found."); }});};
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));