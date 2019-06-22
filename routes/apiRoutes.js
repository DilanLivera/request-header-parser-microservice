const express = require('express'),
      router  = express.Router();
let ipaddress = "",
    language = "",
    software = "";

//date whoami route
router.route('/:whoami',)
  .get((req, res) => {
    software = req.header('User-Agent');
    language = req.header('Accept-Language');
    ipaddress = req.ip;

    res.json({ ipaddress, language, software });
  });

module.exports = router;