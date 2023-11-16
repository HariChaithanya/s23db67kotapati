var express = require('express');
const guitar_controlers= require('../controllers/guitar');
var router = express.Router();
/* GET costumes */
router.get('/', guitar_controlers.guitar_view_all_Page );
router.get('/detail', guitar_controlers.guitar_view_one_Page);
module.exports = router;
