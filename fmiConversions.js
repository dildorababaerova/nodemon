
/** 
* A MODULE TO MAKE TIME CONVERSIONS FROM  FMI DATA
====================================================
* Converts FMI "unix epoc" to ISO-timestamp with time zone
* @summary Multiplies FMI Epoc by 1000 and converts results to ISO string
* @param {int} fmiEpoc - Timestamp from FMI data called Unix epoc
* @return {str} ISO formatted timestamp with timezone
*/



const fmi2isoTimestamp = (fmiEpoc) => {
    let unixEpoc = 1000 * fmiEpoc;
    let isoTimestamp = new Date(unixEpoc);
    return isoTimestamp
}


console.log(fmi2isoTimestamp(1705568400))

module.exports = {
    fmi2isoTimestamp 
}