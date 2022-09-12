const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const db = require('./config/db');
const routes = require('./routes');

//connect to DB
db.connect();
//static files
app.use(express.static(path.join(__dirname, 'public')));

//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//method override
app.use(methodOverride('_method')); // override thêm phương thức PUT
//morgan
app.use(morgan('combined'));

// template engine
app.engine(
    '.hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum(a, b) {
                return a + b;
            },
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// kiểm tra các tuyến đường
routes(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
