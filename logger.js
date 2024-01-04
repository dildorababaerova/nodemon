const fs = require('fs');

timeStamp = new Date();
isotimeStamp = timeStamp.toISOString();

let operation = 'Data Fetch operation';
let status = 'prossesed successfully';
entry = operation + ' ' + status + ' @ ' + isotimeStamp + '\n';

console.log(entry)

fs.appendFile('.dataOperations.log', entry, (error) => {
    if (error) {
        console.log(error)
    }
})
