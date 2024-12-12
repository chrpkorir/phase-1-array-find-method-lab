// code your solution here
const records = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]
function superbowlWin(arr){
    //use find() to get the first object where result = "W"
    const recordFound = arr.find(record => record.result === "W")
    // if record is found, return the year otherwise return undefined
    return recordFound? recordFound.year : undefined
}
console.log(superbowlWin(records))