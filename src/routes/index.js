const SiteController = require('./site.route');
const newsRouter = require('./news.route');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', SiteController);
}

module.exports = route;
