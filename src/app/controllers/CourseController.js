const Course = require('../models/Course');
class CourseController {
    //[GET] /news
    show(req, res) {
        Course.findOne({
            slug: req.params.slug,
        })
            .lean()
            .then((course) => {
                res.render('courses/show', {
                    course,
                });
            });
    }
    //[GET] /create
    create(req, res) {
        res.render('courses/create');
    }
    //[POST] /store
    store(req, res) {
        const course = new Course({
            ...req.body,
            image: `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`,
        });
        course.save().then(() => res.redirect('/'));
    }
    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .lean()
            .then((courses) => {
                res.render('courses/edit', {
                    courses,
                });
            })
            .catch(next);
    }
    //[PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CourseController();
