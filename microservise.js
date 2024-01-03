const Pool = require('pg').Pool;

const cron = require('node-cron');

const getPrice = ('./getNewPrices');

const pool = new Pool ({
    user: 'postgres',
    password: 'Q2werty',
    host: 'localhost',
    database: 'smarthome',
    port: 5432,
})

let lastFetchedDate = '1.1.2023';
cron.schedule('* * * * *', () => {
    try {
let timestamp = new Date();
let dateStr = timestamp.toLocaleDateString();

if (lastFetchedDate != dateStr) {
    getPrices.fetchLatestPriceData().then((json) => {
        json.prices.forEach(async (element) => {
            let values = [element.startDate, element.price];

            const sqlClause = 
            'INSERT INTO public.hourly_price VALUES ($1, $2) RETURNING *';

        const res = await pool.query(sqlClause, values);
        console.log('The following data has been saved', res.rows[0]);
        });
    });
    lastFetchedDate =dateStr;
} else {
    console.log('Data has been succesfully retrieved earlier today');
} 
} catch (error) {
    console.log('An error occurred, trying again in 5 minutes until 4 PM');
}


})