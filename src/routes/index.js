const SiteController = require('./site.route');
const newsRouter = require('./news.route');
const courseRouter = require('./courses.route');
const meController = require('./me.route');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', SiteController);
    app.use('/courses', courseRouter);
    app.use('/me', meController);
}

module.exports = route;
