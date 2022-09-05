const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan')
const app = express();
const port = 3000;

app.use(morgan('combined'));
// template engine


app.engine('.hbs',handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname, 'resources/views') );

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})