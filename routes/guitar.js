var express = require('express');
const guitar_controlers= require('../controllers/guitar');
var router = express.Router();
/* GET costumes */
router.get('/', guitar_controlers.guitar_view_all_Page );
router.get('/detail', guitar_controlers.guitar_view_one_Page);
router.get('/create', guitar_controlers.guitar_create_Page);
/* GET create update page */
router.get('/update', guitar_controlers.guitar_update_Page)
router.get('/delete', guitar_controlers.guitar_delete_Page);
module.exports = router;
