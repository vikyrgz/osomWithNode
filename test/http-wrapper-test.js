var
  expect = require('chai').expect,
  HttpWrapper = require('../src/http-wrapper');

describe('HttpWrapper', function() {

  it('creates a server', function() {
    var httpClientSpy = {
      createServerWasCalled: false,
      createServer: function() {
        this.createServerWasCalled = true;
        return {};
      }
    };
    var http = new HttpWrapper(httpClientSpy);
    http.setup();
    expect(httpClientSpy.createServerWasCalled).to.be.true;
    expect(http.server).is.not.undefined;
  });

  xit('sets up a request listener', function() {
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
    var http = new HttpWrapper(null);
    http.setup();
    http.addRequestListener();
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
    var http = new HttpWrapper(null);
    http.start(serverSpy);
    expect(serverSpy.serverWasStarted).to.be.true;
    expect(serverSpy.serverPort).to.equal(4000);
  });

});
