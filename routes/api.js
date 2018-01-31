//This is an API

const express = require('express');
const router = express.Router();

//Module which this API provides routing for (i.e. this API determines the routes wherein the modules request are handled
const timestamp = require('../my_module/timestamp');

//Routes to which GET requests will go
//This routes a variety of URL's to the same place...how exactly?
router.route('/timestamp/api/v1/:query').get(timestamp.parse);
router.route('/timestamp/api/:query').get(timestamp.parse);
router.route('/timestamp/:query').get(timestamp.parse);
router.route('/:query').get(timestamp.parse);

//Default to homepage if not an API request
/*router.get('*', (req,res) => {
  res.send('./public/index.html')

}); //There's another implementation of this handler that uses pug 
*/
module.exports = router;
