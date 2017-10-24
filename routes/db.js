var express = require('express');
var router = express.Router();

var pg = require('pg');
//Heroku
var conString = 'postgres://mjqozlrvqjtwaa:3af4213db82d996482536eb1526ce204af708405bc79192c4fa26d9084d239c1@ec2-184-72-248-8.compute-1.amazonaws.com:5432/d18203m3jkhso4'
//Local
client = new pg.Client(conString);
router.get('/', function(req, res, next) {
    client.connect(function (err) {
        if (err)
        {
            console.log(err.message)
        }

        client.query("Select * from test_table",function (err, result) {
            if (err)
            { console.error(err); response.send("Error " + err); }
            else

            { console.log("Here are we")
                console.log(result.rows);
                res.render('/db', {results: result.rows}
                );
            }
        })
    })

});
module.exports = router;


