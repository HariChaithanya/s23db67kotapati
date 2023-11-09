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
   
   // VIEWS
// Handle a show all view
exports.guitar_view_all_Page = async function(req, res) {
    try{
    theguitar = await guitar.find();
    res.render('guitar', { title: 'guitar Search Results', results: theguitar });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
// Handle Costume create on POST.
exports.guitar_create_post = async function(req, res) {
    console.log(req.body)
    let document = new guitar();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.guitar_type = req.body.guitar_type;
    document.guitar_price = req.body.guitar_price;
    document.guitar_color = req.body.guitar_color;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }