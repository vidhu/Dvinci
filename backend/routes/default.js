let express = require('express');
let router = express.Router();
let Google = require('../lib/google');

// define the about route
router.get('/roof', (req, res) => {
    console.log(req.query);
    if (!('ad' in req.query)) {
        res.send("Error");
        return;
    }

    Google.geocode(req.query.ad)
        .then((geocode) => {
            let solarInfo = {
                ...geocode.geometry.location,
                solarArea: '832',
                units: 'sqf'
            };
            res.send(solarInfo);
        });
});

router.get('/analyze', (req, res) => {
    let analysis = {
        currentBillAmount: 150,
        kilowattHr: 750,
    };
    analysis['rate'] = analysis.currentBillAmount / analysis.kilowattHr;
    res.send(analysis);
});

module.exports = router;