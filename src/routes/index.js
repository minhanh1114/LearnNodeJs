const newsRouter = require('./news');
const siteRouter = require('./site');
function route(app){

    app.use('/news',newsRouter)

    app.use('/',siteRouter) // đưa xuống dưới match cuối cùng
}

module.exports = route;