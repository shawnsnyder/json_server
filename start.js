var express             = require( 'express' ),
    bodyParser          = require( 'body-parser' ),
    app                 = express();


var path = require('path');



app.use( bodyParser.json() );

app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(3005);
