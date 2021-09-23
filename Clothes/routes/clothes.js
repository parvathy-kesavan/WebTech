module.exports = (app) => {
    const clothes = require('../controller/clothes.js');


    app.get('/', function(req, res, next) {
        res.render('insert', { title: 'My Form' });
      });

    app.post('/cloth',clothes.cloth);
}