const express = require('express');
const morgan = require('morgan');
const { create } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;
const route = require('./routes/index');
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
// HTTP logger
// app.use(morgan('combined'));

// Template engine
const hbs = create({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'resources/views/layouts/'),
    partialsDir: path.join(__dirname, 'resources/views/partials/'),
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views')); // Đảm bảo đường dẫn đúng tới thư mục views

// Routes init
route(app);

app.listen(port, () =>
    console.log(`example app listening at localhost: ${port}`),
);
