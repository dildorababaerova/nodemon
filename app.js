const express = require('express');
const {engine} = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 8080

app.use(express.static('public'));

app.set('views', './views');


app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res)=> {
    res.render('index')

});




app.listen(PORT);
console.log('Server started and it will listen TCP port', PORT);


