const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator'); // giúp tạo slug tự động
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, maxLength: 500 },
        videoId: { type: String, required: true },
        thumb: { type: String, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true }, // tạo tự động ra slug từ trường name (unique: true không bao h tồn tại 2 cái slug giống nhau )
    },
    { timestamps: true },
);

module.exports = mongoose.model('Courses', Course);
// tạo ra 1 dạng 1 bảng Course có cấu trúc  Schema để thức hiện dữ liệu ( dạng dữ liệu có cấu trúc )
