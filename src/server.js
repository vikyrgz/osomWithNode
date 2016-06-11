
module.exports = (function() {

  var PORT = 4000;

  var requestHandler = function(request, response) {
  }

  var setup = function(http) {
    http.createServer();
  };

  var addRequestListener = function(server) {
    server.on('request', requestHandler);
  };

  var start = function(server) {
    server.listen(PORT);
  }

  return {
    setup: setup,
    addRequestListener: addRequestListener,
    start: start
  };

})();
