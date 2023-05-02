class ErrorList {
    // 404错误
    notFind(req, res) {
        res.status(404).render('404.html');
    }
    // 500错误 
    serverError(err, req, res, next) {
        console.log(err);
        res.render('500.html');
    }
}
module.exports = new ErrorList();
