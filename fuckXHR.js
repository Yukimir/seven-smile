//@ts-check

module.exports = function () {
  let sentHeartbeat = false;
  const XHR = XMLHttpRequest;
  var open_original = XHR.prototype.open;
  var send_original = XHR.prototype.send;
  var addEventListener_original = XHR.prototype.addEventListener;
  var setRequestHeader_original = XHR.prototype.setRequestHeader;
  var xhrStateTable = new WeakMap();

  function getXhrState(xhr) {
    var result = xhrStateTable.get(xhr);
    if (!result) {
      result = {};
      xhrStateTable.set(xhr, result);
    }
    if (!result.readyStateListeners)
      result.readyStateListeners = [];
    return result;
  }
  var bhstatic = 'http://127.0.0.1';

  var validTableKeys = [1002, 1003, 4001];

  function tryPreprocessXhr(xhr, state) {
    if (state.url.indexOf(atob("L29iLw==")) >= 0) {
      var obj = JSON.parse(state.data);
      if (obj.c[4001] && !sentHeartbeat) {
        for (var key in obj.c) {
          if (validTableKeys.indexOf(Number(key)) < 0) {
            console.log("Removing " + key + " from ob");
            delete obj.c[key];
          }
        }
        state.data = JSON.stringify(obj);
        sentHeartbeat = true;
      } else {
        console.log("Squelched", obj);
        state.overrideUrl = bhstatic;
        state.noHeaders = true;
        open_original.call(xhr, state.method, state.overrideUrl, state.async);
      }
    } else if (state.url.indexOf(atob("Z2MvZ2M=")) >= 0) {
      var obj = JSON.parse(state.data);
      for (var key in obj.c) {
        if (validTableKeys.indexOf(Number(key)) < 0) {
          console.log("Removing " + key + " from gc/gc", obj);
          delete obj.c[key];
        }
      }
      state.data = JSON.stringify(obj);
    } else if (state.url.indexOf(atob("ZXJyb3IvanM=")) >= 0) {
      console.log("Squelched", state.data);
      state.overrideUrl = bhstatic;
      state.noHeaders = true;
      open_original.call(xhr, state.method, state.overrideUrl, state.async);
    }
  };

  XHR.prototype.open = function open(method, url, async, user, password) {
    try {
      var state = getXhrState(this);
      state.method = method;
      state.url = url;
      state.async = async;
      state.opened = performance.now();
      state.loadingStarted = 0;
      state.headersReceived = 0;
      state.custom = false;
      state.prefetchedRequest = null;
      state.overrideUrl = null;
    } catch (exc) {
      console.log(exc);
    }
    var result = open_original.apply(this, arguments);
    return result;
  };

  XHR.prototype.send = function send(data) {
    var state = null;
    try {
      state = getXhrState(this);
      if (state.url) {
        state.sent = performance.now();
        state.data = data;
        tryPreprocessXhr(this, state);
      } else {
        // ???
        console.log("Xhr with no state", this);
      }
    } catch (exc) {
      console.log(exc);
    }
    send_original.call(this, state.data);
  };
}
