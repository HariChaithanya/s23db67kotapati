var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var guitar_controller = require('../controllers/guitar');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume. 
router.post('/guitar', guitar_controller.guitar_create_post);
// DELETE request to delete Costume.
router.delete('/guitar/:id', guitar_controller.guitar_delete);
// PUT request to update Costume.
router.put('/guitar/:id', guitar_controller.guitar_update_put);
// GET request for one Costume.
router.get('/guitar/:id', guitar_controller.guitar_detail);
// GET request for list of all Costume items.
router.get('/guitar', guitar_controller.guitar_list);
module.exports = router;