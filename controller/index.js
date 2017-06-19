var express = require('express'),
router = express.Router();
// router.get('/',function(req,res){
//    res.send('main controller');
// });
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var facebook = require('./facebook')(passport); //configure facebook
var google = require('./google')(passport); //configure facebook
var User = require("../model/user");
// router.use('/login',require('./userdata'));
router.use('/checklogin',require('./checklogin'));
router.use('/logout',require('./logout'));
router.get('/auth/facebook',
    passport.authenticate('facebook', {
        scope: ['email','public_profile','user_photos','publish_actions','user_status']
    }));
// router.use("/auth",google);

//router.use('/getDataById',require('./getDataById'));
// router.use('/updatecard',require('./notecard'));
// router.use('/setcolor',require('./notecard'));
// router.use('/updatecard',require('./updatecard'));
//router.use('/',require('./auth'));
//router.use('/addcard',require('./notecard'));
//router.use('/imageload',require('./userdata'));
//router.use('/',require('./logout'));
//router.use('/getData',require('./auth'),require('./notecard'));
// router.use( require('./auth'),require('./notecard'));
//router.use(require('./auth'),require('./notecard'));
//router.use('/deletecard',require('./notecard'));
//router.use('/reminders',require('./notecard'));
//router.use('/pinnote',require('./notecard'));
//router.use('/',require('./addcard'))
router.get('/facebook/callback',facebookSignInCallback);
function facebookSignInCallback(req, res, next) {
  //  passport = req.passport.instance;
    passport.authenticate('facebook',function(err, user, info) {
			console.log("user",user);
        if(err) {
            return next(err);
        }
        if(!user) {
            return res.redirect('/#!/login');
        }
        else {
          return res.redirect('/#!/todo');
        }
            //  res.writeHead(302, {
            //      'Location': '/#!/authProvider?token=' + user.fb.access_token + '&id='+user._id+ '&fb_id='+user.fb.id+ '&email='+user.fb.email+ '&photo='+user.fb.profile+ '&provider='+'fb'
            //  });
            // res.end();
        // });
    })(req,res,next);
}

// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve redirecting
//   the user to google.com.  After authorization, Google will redirect the user
//   back to this application at /auth/google/callback
router.get('/auth/google',
    passport.authenticate('google', {
        scope: ['email', 'profile']
    }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
    router.get('/google/callback',googleSignInCallback);
    function googleSignInCallback(req, res, next) {
        passport = req._passport.instance;
        passport.authenticate('google',function(err, user, info) {
    			console.log("users::",user);
            if(err) {
                return next(err);
            }
            if(!user) {
                return res.redirect('/#!/login');
            }else {
              return res.redirect('/#!/todo');
            }
            console.log(user);
                // res.writeHead(302, {
                //     'Location': '/#!/authProvider?token=' + user.google.access_token + '&id='+user._id+ '&google_id='+user.google.id+ '&email='+user.google.email+ '&profile='+user.google.profile +'&provider='+'google'
                // });
                res.end();
            // });
        })(req,res,next);
    }
    router.get('/logout', function(req, res){
      req.logout();
      res.redirect('/');
    });
    router.use(require('./userdata'));
    router.use(require('./notecard'));
    //router.use(require('./notecard'));
module.exports = router;
