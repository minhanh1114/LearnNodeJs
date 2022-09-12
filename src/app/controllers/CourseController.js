const Course = require('../Models/Course'); // Tầng Models

const { mongooseToObject } = require('../../until/mongoose'); // Công cụ chuyển handlebars

class CourseController {
    //Get /news
    show(req, res) {
        const { slug } = req.params;
        Course.findOne({ slug: slug }).then((course) =>
            res.render('courses/show', { course: mongooseToObject(course) }),
        );
    }
    //[POST] /courses/create
    create(req, res) {
        res.render('courses/create');
    }

    // tạo mới 1 bản ghi
    store(req, res) {
        const formData = req.body;
        formData.thumb = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((err) => {});
    }
    //[GET] /courses/:id/edit
    edit(req, res, next) {
        const { id } = req.params;
        Course.findById(id)
            .then((course) => res.render('courses/edit', { course: mongooseToObject(course) }))
            .catch(next);
    }
    // [POST] /courses/update/:id      (update course)
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me')) // redirect chuyển hướng đến 1 url khác, render là build dao diện (gọi đến file giao diện)
            .catch(next);
    }
}
module.exports = new CourseController();
// lỗi chỉ hiển thị bản ghi đầu, nguyên nhân là do thiếu tham số truy vấn trong Course.findOne();
// khắc phục, bổ xung vào file CourseController đối số để thực hiện truyền truy vấn #slug: { type: String, maxLength: 100 } $
