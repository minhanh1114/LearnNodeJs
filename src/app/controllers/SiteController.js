const Course = require('../Models/Course'); // Tầng Models
const { multipleMongooseToObject } = require('../../until/mongoose'); // Công cụ chuyển handlebars
class SiteController {
    //Get /news
    index(req, res, next) {
        Course.find({})
            .then((course) => res.render('home', { course: multipleMongooseToObject(course) }))
            .catch(next);
    }

    // [GET] Search
    search(req, res) {
        res.send('search');
    }
}
module.exports = new SiteController();
