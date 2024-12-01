const Course = require('../models/Course');

class SiteController {
    //[GET] /news
    index(req, res) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: courses,
                });
            })
            .catch((error) => {
                next(error);
            });
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
