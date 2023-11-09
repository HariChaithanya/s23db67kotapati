var guitar = require('../models/guitar');
// List of all Costumes
exports.guitar_list = function(req, res) {
 res.send('NOT IMPLEMENTED: guitar list');
};
// for a specific Costume.
exports.guitar_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: guitar detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.guitar_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: guitar create POST');
};
// Handle Costume delete form on DELETE.
exports.guitar_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: guitar delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.guitar_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: guitar update PUT' + req.params.id);
};

// List of all Costumes
exports.guitar_list = async function(req, res) {
    try{
    theguitar = await guitar.find();
    res.send(theguitar);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
   