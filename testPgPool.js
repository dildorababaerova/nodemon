const Pool = require('pg-pool')

const pool= new Pool({
    user : 'postgres',
    password: 'Q2werty',
    host: 'localhost',
    database: 'smarthome',
    port: 5432, 
});




// const query1 = pool.query(sqlClause, (error, results) => {
//     if (error) {
//         throw error;
//     }
//     console.log(results.rows);
// })
const query2 = async () => {
    let resultset = await pool.query('SELECT * FROM public.hourly_page');
    return resultset
}

module.exports = {
    query2
}

// query2()
// .then((resultset) => console.log(resultset.rows))