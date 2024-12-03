const Course = require('../models/Course');

class MeController {
    //[GET] /news
    async storedCourses(req, res, next) {
        await Course.find({})
            .lean()
            .then((courses) => {
                res.render('me/stored-courses', {
                    courses,
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();