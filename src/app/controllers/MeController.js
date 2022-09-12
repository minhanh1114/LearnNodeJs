const Courses = require('../Models/Course');
const { multipleMongooseToObject } = require('../../until/mongoose');

class MeController {
    storedCourse(req, res, next) {
        Courses.find({})
            .then((course) => res.render('me/stored-courses', { course: multipleMongooseToObject(course) }))
            .catch(next);
    }
}
module.exports = new MeController();
