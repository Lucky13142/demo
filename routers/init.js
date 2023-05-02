class RenderHTML {
    index(req, res) {
        res.render('index.html');
    }
}
module.exports = new RenderHTML();


