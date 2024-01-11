const Pool = require('pg').Pool;

const cron = require('node-cron');

const getPrices = require('./getNewPrices');

const logger = require('./logger');

//const AppSettings =require('./handleSettings');

const pool = new Pool ({
    user: 'postgres',
    password: 'Q2werty',
    host: 'localhost',
    database: 'smarthome',
    port: 5432,
})

let lastFetchedDate = '1.1.2023';
cron.schedule('0/5 11 * * *', () => {
    try {
let timestamp = new Date();
let dateStr = timestamp.toLocaleDateString();

if (lastFetchedDate != dateStr) {
    message = 'Started fetching price data'

    console.log(message);
    logger.add2log(message, logFile)
    getPrices.fetchLatestPriceData().then((json) => {
    
        json.prices.forEach(async (element) => {
            let values = [element.startDate, element.price];

            const sqlClause = 
            'INSERT INTO public.hourly_price VALUES ($1, $2) ON CONFLICT DO NOTHING RETURNING *';

        const runQuery = async () => {
            let resultset = await pool.query(sqlClause, values);
            return resultset;
        }
            runQuery().then((resultset) => {
            
            if (resultset.rows[0] != undefined) {
                message = 'Added a row'
            } else {
            message = 'Skipped an existing row'
            }
        console.log(message);
        logger.add2log(message, logFile)
        });
    });
});
    lastFetchedDate =dateStr;
    message = 'Fetched at' + lastFetchedDate
    console.log(message)
    logger.add2log(message, logFile)
    
    
} else {
    message = 'Next scheduled event:Data has been succesfully retrieved earlier today' 
    console.log(message);
    logger.add2log(message, logFile)
} 
} catch (error) {
    message = 'An error occurred (' + error.toString() + '), trying again in 5 minutes until 4 PM';
    console.log(message)
    logger.add2log(message, logFile)
}

});