const express = require('express');
const {engine} = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 8080

app.use(express.static('public'));

app.set('views', './views');


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res)=> {
    let homePageData={
        'price': 31.25,
        'wind': 8,
        'temperature': -12,
    }
    res.render('index', homePageData)

});

app.get('/hourly', (req, res)=> {

    let hourlyPageData = {hourlyPrices:[ 
        {hour: 13, price: 31.44},
        {hour: 14, price: 30.12},
        {hour: 15, price: 15.34}
]};
    
    res.render('hourly', hourlyPageData)

});




app.listen(PORT);
console.log('Server started and it will listen TCP port', PORT);


