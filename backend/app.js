let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

const defaultRoute = require('./routes/default');
app.use('/', defaultRoute);

const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});