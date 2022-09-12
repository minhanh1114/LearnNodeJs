class NewController {
  //Get /news
  index(req, res) {
    res.render('news');
  }
  show(req, res) {
    res.send('news details');
  }
}
module.exports = new NewController();
