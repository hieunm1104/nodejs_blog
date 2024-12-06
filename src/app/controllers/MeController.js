const Course = require('../models/Course');

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Promise.all([
            Course.find({}).lean(), // Lấy tất cả các khóa học chưa bị xóa
            Course.countDocumentsWithDeleted({ deleted: true }), // Đếm số lượng khóa học đã bị xóa
        ])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    courses,
                    deletedCount,
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
