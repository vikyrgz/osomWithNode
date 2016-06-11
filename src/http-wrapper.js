function HttpWrapper(httpClient) {

  var http = httpClient;
  var PORT = 4000;

  var requestHandler = function(request, response) {
  }

  this.setup = function() {
    this.server = http.createServer();
  };

  this.addRequestListener = function() {
    this.server.on('request', requestHandler);
  };

  this.start = function(server) {
    server.listen(PORT);
  }

};

module.exports = HttpWrapper;

