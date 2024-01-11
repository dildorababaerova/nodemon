const express = require('express');
const {engine} = require('express-handlebars');

const fetch = require('node-fetch');

const testPgPool = require('./testPgPool');

//import fetch from 'node-fetch';




const app = express();
const PORT = process.env.PORT || 8080

app.use(express.static('public'));
app.set('views', './views');


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res)=> {
    
    let homePageData= {
        'price': 0,
        'wind': 0,
        'temperature': 0,
    };

    // testPgPool.query2().then(
    //     (results) => {
    //         homePageData.price = results.rows[0].price;
    //         res.render('index', homePageData)
    //     }
    // )

    testPgPool.query2().then((resultset) => {
        homePageData.price = resultset.rows[0]['price']
        console.log(resultset.rows[0]['price'])   
    res.render('index', homePageData)

    });
})

app.get('/hourly', (req, res) => {

    
        
]};
    testPgPool.query2().then((resultset) => {
        homePageData.tableData = resultset.rows
        let hourlyPageData = {'tableData': tabledata}
        console.log(resultset.rows)   
    res.render('hourly', hourlyPageData)

    });
})


app.get('/test', (req, res) => {
    let tableHours = [12, 13, 14, 15, 16]
    let jsonTableHours = JSON.stringify(tableHours)
    let tablePrices = [35, 21, 76, 12, 3]
    let jsonTablePrices = JSON.stringify(tablePrices)
    let chartPageData = {'hours': jsonTableHours, 'prices': jsonTablePrices}

    res.render('testCJSv4', chartPageData);
});


app.listen(PORT);
console.log('Server started and it will listen TCP port', PORT);


