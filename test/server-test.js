
var
  expect = require('chai').expect,
  server = require('../src/server');

describe('Server', function() {

  it('creates a server', function() {
    var httpSpy = {
      serverCreated: false,
      createServer: function() {
        this.serverCreated = true;
      }
    };
    var myServer = server.setup(httpSpy);
    expect(httpSpy.serverCreated).to.be.true;
  });

  it('sets up a request listener', function() {
    var myServer = {
      listenerIsSetup: false,
      listenerEvent: '',
      listenerCallback: undefined,
      on: function(event, callback) {
        this.listenerIsSetup = true;
        this.listenerEvent = event;
        this.listenerCallback = callback;
      }
    }
    server.addRequestListener(myServer);
    expect(myServer.listenerIsSetup).to.be.true;
    expect(myServer.listenerEvent).to.equal('request');
    expect(myServer.listenerCallback).to.not.be.undefined;
  });

  it('starts the server', function() {
    var myServer = {
      serverWasStarted: false,
      serverPort: undefined,
      listen: function(port) {
        this.serverWasStarted = true;
        this.serverPort = port;
      }
    };
    server.start(myServer);
    expect(myServer.serverWasStarted).to.be.true;
    expect(myServer.serverPort).to.equal(4000);
  });

});
