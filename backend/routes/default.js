let express = require('express');
let router = express.Router();
let Google = require('../lib/google');

// define the about route
router.get('/geocode', (req, res) => {
    console.log(req.query);
    if(!('ad' in req.query)){
        res.send("Error");
        return;
    }
    
    Google.geocode(req.query.ad)
    .then((geocode) => {
        res.send(geocode.geometry.location);
    })
});

module.exports = router;