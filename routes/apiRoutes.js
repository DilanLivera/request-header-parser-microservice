const express = require('express'),
      router  = express.Router();
let ipaddress = "",
    language = "",
    software = "";

//date whoami route
router.route('/whoami',)
  .get((req, res) => {
    software = req.header('User-Agent');
    language = req.header('Accept-Language');    
    ipaddress = req.header('x-forwarded-for').split(',')[0]; // can use req.connection.remoteAddress too
    console.log(language);

    res.json({ ipaddress, language, software });
  });

module.exports = router;