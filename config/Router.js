'use strict';

var importer = require('anytv-node-importer');
var path = require('path');

module.exports = function (router) {

    var __ = importer.dirloadSync(__dirname + '/../controllers');

    router.del = router.delete;
  
    router.all('*', function(req, res){
        if (req.get('Accept').match(/application\/json/) === null) {
            res.status(404).sendFile(path.resolve(__dirname + '/../public/404.html'));
        }
    });
    return router;
};