
class NewsController{

    //[GET] /news
    index(req, res){
        res.render('news')
    }
    show(req, res){
        res.send("test route sp")
    }
}


module.exports = new NewsController;