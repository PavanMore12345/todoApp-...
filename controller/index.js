var express = require('express'),
router = express.Router();
// router.get('/',function(req,res){
//    res.send('main controller');
// });
router.use(require('./userdata'));
// router.use('/login',require('./userdata'));
router.use('/checklogin',require('./checklogin'));
router.use('/logout',require('./logout'));
router.use(require('./notecard'));
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
module.exports = router;
