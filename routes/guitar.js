var express = require('express');
const guitar_controlers= require('../controllers/guitar');
var router = express.Router();
var passport=require('passport');
/* GET costumes */
router.get('/', guitar_controlers.guitar_view_all_Page );
router.get('/detail', guitar_controlers.guitar_view_one_Page);
router.get('/create', guitar_controlers.guitar_create_Page);
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
router.get('/update', secured,guitar_controlers.guitar_update_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
   });
/* GET create update page */
//router.get('/update', guitar_controlers.guitar_update_Page)
router.get('/delete', guitar_controlers.guitar_delete_Page);
module.exports = router;
