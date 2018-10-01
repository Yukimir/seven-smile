const path = require('path');
let PluginHelper = null;
module.exports = {
  run: run,
  newGameResponse: () => {}
}

let userID = null;
let AjaxEnable = false;

function run(pluginHelper) {
  global['ph'] = pluginHelper;
  PluginHelper = pluginHelper;
  pluginHelper.on('load-game', (msg) => {
    if (msg.Spec === 'granblue') {
      init();
    }
  })
}

function init() {
  ph.loadEmbedPage('right', path.join(__dirname, 'gbf-raid', 'dist', 'gbf-raid', 'index.html'), 400);
  ph.onMessage((msg, sendResponse) => {
    switch (msg.type) {
      case 'userID':
        if (userID !== msg.data) {
          userID = msg.data;
        }
        break;
      case 'ajaxEnable':
        AjaxEnable = true;
        break;
      case 'ajaxDisable':
        AjaxEnable = false;
      case 'joinRaid':
        joinRAID(msg.data, sendResponse);
        break;
    }
  })
}

function ajax(url, data, callback) {
  if (AjaxEnable) {
    ph.sendMessage({
      type: 'doAjax',
      url: url,
      data: JSON.stringify(data)
    }, callback);
  }
}

function getStatus() {
  ajax('/user/status', null, (r) => {
    console.log(r)
  });
}

function joinRAID(id, sendResponse) {
  let data = {
    special_token: null,
    battle_key: id
  }
  ajax('/quest/battle_key_check', data, (result) => {
    if (result.status) {
      let data = result.data
      if (typeof data === 'string') {
        data = JSON.parse(data);
      }
      if (data['redirect']) {
        PluginHelper.loadURL(`http://game.granbluefantasy.jp/${data.redirect}`);
        if (sendResponse) {
          sendResponse(true);
        }
      } else {
        if (sendResponse) {
          sendResponse(data);
        }
      }
    }
  })
}
