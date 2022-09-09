class SiteController
{
    //Get /news
    index(req,res){
        res.render('home');
    }
    //seach
    search(req,res){
        res.send('search')
    }
}
module.exports = new SiteController;