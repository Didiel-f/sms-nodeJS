const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const app = express();


// SETTINGS 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: require('./libs/handlebars')
}));
app.set('view engine', '.hbs');

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// ROUTES
app.use(require('./routes/index.routes'));

// STATIC FILES
app.use(express.static(__dirname + '/public'));


module.exports = app;
























