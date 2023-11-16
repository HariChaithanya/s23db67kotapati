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
// exports.guitar_update_put = function(req, res) {
//  res.send('NOT IMPLEMENTED: guitar update PUT' + req.params.id);
// };

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

   // for a specific eagle.
exports.guitar_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await guitar.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    exports.guitar_update_put = async function(req, res) {
        console.log(`update on id ${req.params.id} with body
        ${JSON.stringify(req.body)}`)
        try {
        let toUpdate = await guitar.findById( req.params.id)
        // Do updates of properties
        if(req.body.guitar_color)
        toUpdate.guitar_color = req.body.guitar_color;
        if(req.body.guitar_type) toUpdate.guitar_type = req.body.guitar_type;
        if(req.body.guitar_price) toUpdate.guitar_price = req.body.guitar_price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
        failed`);
        }
        };
        // Handle Costume delete on DELETE.
exports.guitar_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await guitar.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
   
   // Handle a show one view with id specified by query
exports.guitar_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await guitar.findById( req.query.id)
    res.render('guitardetail', 
   { title: 'Guitar Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.guitar_create_Page = function(req, res) {
 console.log("create view")
 try{
 res.render('guitarcreate', { title: 'Guitar Create'});
 }
 catch(err){
 res.status(500)
 res.send(`{'error': '${err}'}`);
 }
};
 