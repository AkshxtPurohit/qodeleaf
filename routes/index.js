var express = require('express');
const passport = require('passport');
var router = express.Router();
var userModel = require("./users");
var localStrategy = require('passport-local');

passport.use(new localStrategy(userModel.authenticate()));

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/register',function(req,res,next){
  var per = new userModel({
    username: req.body.username,
  });

  userModel.register(per, req.body.password).then(function (u) {
    passport.authenticate("local")(req, res, function () {
      res.redirect('/profile');
    })
  })
})
router.get('/login', function(req, res, next) {

  res.render('login');
});
router.post('/login',passport.authenticate('local',{
  successRedirect:'/profile',
  failureRedirect:'/login'
}),function(req, res, next) {})

module.exports = router;
