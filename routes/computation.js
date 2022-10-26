var express = require('express');
var router = express.Router();
var r  = Math.random();

/* GET users listing. */
router.get('/', function(req, res, next) {
    r=Math.random();
    res.send('round of ('+ r +') is '+ Math.round(r) +'<br>'+
    'Math.Random is '+ Math.random() +'<br>'+
    'Math.fround of ('+ r +') is '+ Math.fround(r) );
});

module.exports = router;