module.exports = (app) => {
    const clothes = require('../controller/clothes.js');


    app.get('/', function(req, res, next) {
        res.render('login', { title: 'My Form' });
      });
    app.post('/login',clothes.login);

    app.get('/signup', function(req, res, next) {
        res.render('signup', { title: 'My Form' });
      });
    
    app.post('/signup', clothes.signup);
    app.post('/cloth',clothes.cloth);
}