module.exports = {
    // xử lí với handlebars có 1 cái dữ liệu là 1 mảng
    multipleMongooseToObject: function (mongooseArrays) {
        return mongooseArrays.map((mongoose) => mongoose.toObject());
    },
    // xử lí với handlebars có 1 cái dữ liệu là 1 phần tử
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
