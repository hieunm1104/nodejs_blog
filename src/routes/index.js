const SiteController = require('./site.route');
const newsRouter = require('./news.route');
const courseRouter = require('./courses.route');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', SiteController);
    app.use('/courses', courseRouter);
}

module.exports = route;
