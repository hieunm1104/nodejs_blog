const Course = require('../models/Course');

class MeController {
    //[GET] /me/stored/courses
    async storedCourses(req, res, next) {
        await Course.countDocuments({ deleted: true })
            .then((deletedCount) => {
                // res.render('me/stored-courses', {
                //     deletedCount,
                // });
                console.log(deletedCount);
            })
            .catch(next);

        await Course.find({})
            .lean()
            .then((courses) => {
                res.render('me/stored-courses', {
                    courses,
                });
            })
            .catch(next);
    }
    //[GET] /me/trash/courses
    async trashCourses(req, res, next) {
        await Course.findWithDeleted({ deleted: true })
            .lean()
            .then((courses) => {
                res.render('me/trash-courses', {
                    courses,
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
