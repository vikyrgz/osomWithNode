var
  expect = require('chai').expect,
  http   = require('../src/http-wrapper');

describe('HTTPWrapper', function() {

  it('creates a server', function() {
    var httpSpy = {
      serverCreated: false,
      createServer: function() {
        this.serverCreated = true;
      }
    };
    var server = http.setup(httpSpy);
    expect(httpSpy.serverCreated).to.be.true;
  });

  it('sets up a request listener', function() {
    var serverSpy = {
      listenerIsSetup: false,
      listenerEvent: '',
      listenerCallback: undefined,
      on: function(event, callback) {
        this.listenerIsSetup = true;
        this.listenerEvent = event;
        this.listenerCallback = callback;
      }
    }
    http.addRequestListener(serverSpy);
    expect(serverSpy.listenerIsSetup).to.be.true;
    expect(serverSpy.listenerEvent).to.equal('request');
    expect(serverSpy.listenerCallback).to.not.be.undefined;
  });

  it('starts the server', function() {
    var serverSpy = {
      serverWasStarted: false,
      serverPort: undefined,
      listen: function(port) {
        this.serverWasStarted = true;
        this.serverPort = port;
      }
    };
    http.start(serverSpy);
    expect(serverSpy.serverWasStarted).to.be.true;
    expect(serverSpy.serverPort).to.equal(4000);
  });

});
