//@ts-check
let ph = null;
module.exports = {
  run: run
}

function run(pluginHelper) {
  global['ph'] = pluginHelper;
  ph = pluginHelper;
  require('./fuckXHR')();
  window.onload = () => {
    setTimeout(init, 3000);
  }
}


function init() {
  const Game = window['Game'];
  if (Game && Game.userId) {
    ph.sendMessage({
      type: 'userID',
      data: Game.userId
    });
    if (location.hash) {
      ph.sendMessage({
        type: 'ajaxEnable'
      });
    } else {
      ph.sendMessage({
        type: 'ajaxDisable'
      });
    }
    ph.onMessage((msg, callback) => {
      console.log(msg);
      switch (msg.type) {
        case 'doAjax':
          doAjax(msg.url, msg.data, callback);
          break;
      }
    })

    inject();

    window.onhashchange = (event) => {
      inject();
    }
  }
}

function inject() {
  if (location.hash.indexOf('#raid') >= 0) {
    let href = location.href.replace('http://', '');
    let hrefA = href.split('/');
    if (hrefA.length >= 3) {
      // this is combat
      require('./combat')();
    }
  }
}

function doAjax(url, data, callback) {
  const $ = window['$'];
  const options = {
    cache: false,
    global: false
  };
  if (data) {
    options.data = data;
    options.method = "POST";
  }
  options.success = (result) => {
    if (callback) callback({
      status: true,
      data: result
    });
  }
  options.error = (jqXHR, exception) => {
    if (callback) callback({
      status: false,
      data: jqXHR.status + '--' + String(exception)
    });
  }
  $.ajax(url, options);
}
