const magicCode = ['火', '水', '土', '风'];
const magicLeft = -13;
const magicRight = -40.5
const magicHeight = [
  -804,
  -1010,
  -907,
  -701
]
const magicActiveHeight = [
  -393,
  -289,
  -598,
  -495
]
const magicDesc = [
  ['火伤/火+1<br>※火-2 全火攻↑/庇护', '奥义满<br>※火-1 全必杀↑', '参战者弱体耐性↑', '光伤/光+1<br>※光-2 全光攻↑/幻影2回'],
  ['水伤<br>※水-1 敌水牢', '水伤/水+1<br>※水-2 全水攻↑/变转/有利属伤↓', '暗伤/暗+1<br>※暗-2 全暗攻↑/奥义性能UP', '奶死那些背水佬'],
  ['敌自属防御↓', '全弱体回1/弱体成功↑', '土伤/土+1<br>※土-2 全土攻↑/连击↑', '土伤 <br>※土-1 敌命中率↓'],
  ['全奥义上升量↑/敌特动全TA↑', '敌自不利属攻↓', '全活性<br>※风-1 高扬', '风伤/风+1<br>※风-2 全风攻↑/技能性能↑']
]


function emulateClick(element, event) {
  let eventDown = element.ownerDocument.createEvent('MouseEvents');
  let eventUp = element.ownerDocument.createEvent('MouseEvents');
  let r = Math.floor(Math.random() * 10);
  eventDown.initMouseEvent('mousedown', true, true, window, 0, event.screenX + r, event.screenY, event.clientX + r, event.clientY);
  eventUp.initMouseEvent('mouseup', true, true, window, 0, event.screenX + r, event.screenY, event.clientX + r, event.clientY);

  function click() {
    let ms = Math.random() * 10 + 50;
    ms = Math.floor(ms);
    element.dispatchEvent(eventDown, true);
    setTimeout(() => {
      element.dispatchEvent(eventUp, true);
    }, ms);
  }

  click();
}

class abilityBtn {
  constructor(pos, abi, context) {
    this.pos = pos;
    this.abi = abi;
    this.context = context;
    $(context).css('position', 'relative');
    this.img = document.createElement('img');
    $(this.img).css('height', '23px');
    this.context.appendChild(this.img);

    this.cross = document.createElement('div');
    $(this.cross).addClass('cross');
    this.context.appendChild(this.cross);

    this.coolDown = document.createElement('div');
    $(this.coolDown).css('color', 'white');
    $(this.coolDown).css('position', 'absolute');
    $(this.coolDown).css('top', '0');
    $(this.coolDown).css('left', '0');
    $(this.coolDown).css('height', '23px');
    $(this.coolDown).css('width', '23px');
    $(this.coolDown).css('text-align', 'center');
    $(this.coolDown).css('line-height', '20px');
    $(this.coolDown).css('cursor', 'default');
    this.context.appendChild(this.coolDown);
    this.refresh();

    this.context.addEventListener('click', (event) => {
      $(this.img).css('filter', 'brightness(60%)');
      var icon = $(`.ability-character-num-${this.pos}-${this.abi}`);
      if (!icon.attr('ability-name')) return;
      emulateClick(icon[0], event);

    })
  }
  refresh() {
    var icon = $(`.ability-character-num-${this.pos}-${this.abi}`);
    var cooldown = $(`.ability-icon-num-${this.pos}-${this.abi}`);
    if (!icon.attr('ability-name')) {
      this.img.src = '';
      this.coolDown.innerHTML = '';
      $(this.context).attr('title', '');
      return;
    }
    let src = icon.children().attr('src');
    let v = cooldown.attr('value');
    if (!src || !v) return;
    let title = icon.attr('ability-name') + '\n';
    title += icon.attr('text-data');
    $(this.context).attr('title', title);
    this.img.src = src;
    this.coolDown.innerHTML = v === '0' ? '' : v;

    // .dark
    let display = icon.parent().find('.ico-ability-shine').css('display');
    if (display === 'block') {
      $(this.img).css('filter', 'brightness(60%)');
    } else {
      $(this.img).css('filter', 'brightness(100%)');
    }

    setTimeout(() => {
      // pseudo
      let p = icon.parent()[0];
      let style = window.getComputedStyle(p, '::after');
      $(this.cross).css('background', style.background);
    }, 500);

  }
}

function inject() {
  console.log('inject combat');
  // insert CSS
  var style = document.createElement('style');
  document.head.appendChild(style);
  let sheet = style.sheet;
  sheet.insertRule(`
  .cross{
    display:block;
    width:43px;
    height:43px;
    position:absolute;
    top:-10px;
    left:-10px;
    transform:scale(0.5);
  }
  `, 0);
  sheet.insertRule(`
  .block{
    display:block !important;
  }
  `, 0);
  sheet.insertRule(`
  .magic-cheat-sheet{
    position: absolute;
    height: 100%;
    width: 100%;
    background: black;
    z-index: 10;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    line-height: 60px;
  }
  `, 0);
  sheet.insertRule(`
  .magic-table-cube{
    height: 62px;
    width: 62px;
    margin: 1px;
    display: flex;
    justify-content: space-around;
    flex-flow: column;
  }
  `, 0);
  var subCommandPanel = $('.prt-sub-command');
  var commandPanel = $('.prt-command');
  if (subCommandPanel.length === 0 || commandPanel.length === 0) {
    // 页面还未加载完毕,100MS后再次尝试
    setTimeout(inject, 100);
    return;
  }
  if (subCommandPanel.attr('yukimir') === 'true' || commandPanel.attr('yukimir') === 'true') {
    // 元素还未刷新完毕,100MS后再次尝试
    setTimeout(inject, 100);
    return;
  }
  subCommandPanel.attr('yukimir', 'true');
  commandPanel.attr('yukimir', 'true');
  subCommandPanel.css('margin-top', '162px');
  commandPanel.css('height', '239px');
  var cntMulit = $('.cnt-multi');
  if (cntMulit.length > 0) {
    cntMulit.css('margin-top', '499px');
  }
  let abilities = $('.lis-ability');
  var abiBtnList = [];
  // 设置对技能面板的监听
  var config = {
    childList: true,
    subtree: true
  };
  var callback = function (mutationsList) {
    for (var mutation of mutationsList) {
      if (mutation.type === 'childList') {
        var c = $(mutation.target).attr('class')
        if (!c) return;
        c = c.split(' ');
        if (c[1] && c[1].indexOf('ability-character-num') >= 0) {
          let temp = c[1].replace('ability-character-num-', '');
          if (!temp) return;
          temp = temp.split('-');
          let pos = Number(temp[0]);
          let abi = Number(temp[1]);
          let btn = abiBtnList.find((v) => {
            if (v.pos === pos && v.abi === abi) return true;
          })
          if (btn) {
            btn.refresh();
          }
        }
      }
    }
  };
  var observer = new MutationObserver(callback);
  observer.observe(commandPanel[0], config);

  // 为每一个角色添加快捷技能面板
  let members = $('.prt-member').children();
  for (let i = 0; i < members.length; i++) {
    var div = document.createElement('div');
    div.addEventListener('mousedown', (e) => {
      e.stopImmediatePropagation();
      e.stopPropagation();
    })
    members[i].appendChild(div);
    $(div).css('height', '49px');
    $(div).css('display', 'flex');
    $(div).css('justify-content', 'space-between');
    $(div).css('flex-wrap', 'wrap');
    for (let j = 1; j <= 4; j++) {
      let d = document.createElement('div');
      let btn = new abilityBtn(i + 1, j, d);
      abiBtnList.push(btn);
      div.appendChild(d);
    }
  }


  waitForGameStage(() => {
    // 魔 法 少 女 姬 塔
    const abilityPop = $('.prt-ability-mark');
    abilityPop.css('background', 'transparent');
    let magicObsConfig = {
      attributes: true,
    }
    let magicObsCallback = function (mutationsList) {
      for (var mutations of mutationsList) {
        if (
          mutations.type === 'attributes' &&
          mutations.attributeName === 'class' &&
          abilityPop[0].classList.contains('prt-magic-circle')
        ) {
          abilityPop.children('.magic-cheat-sheet').remove();
          let cheatTable = document.createElement('div');
          cheatTable.classList.add('magic-cheat-sheet');

          const frames = $('.lis-ability-frame');
          const backgroundImage = frames.next().css('background-image');
          // frames.next().css('background','transparent');

          // 二维数组
          let table = [];
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
              let cube = document.createElement('div');
              cube.classList.add('magic-table-cube');
              let content = document.createElement('div');
              let left = document.createElement('div');
              $(left).css('background-image', backgroundImage);
              $(left).css('background-size', '256px 1264px');
              $(left).css('background-repeat', 'no-repeat');
              $(left).css('background-position-x', magicLeft);
              $(left).css('background-position-y', magicHeight[i]);
              $(left).css('height', '55px');
              $(left).css('width', '27.5px');
              let right = document.createElement('div');
              $(right).css('background-image', backgroundImage);
              $(right).css('background-size', '256px 1264px');
              $(right).css('background-repeat', 'no-repeat');
              $(right).css('background-position-x', magicRight);
              $(right).css('background-position-y', magicHeight[j]);
              $(right).css('height', '55px')
              $(right).css('width', '27.5px');
              content.appendChild(left);
              content.appendChild(right);
              $(content).css('display', 'flex');
              $(content).css('transform', 'scale(0.8)');
              $(content).css('margin-top', '-7px');
              $(content).css('margin-left', '3px');
              let desc = document.createElement('div');
              desc.innerHTML = magicDesc[i][j];
              $(desc).css('color', 'white');
              $(desc).css('line-height', '8px');
              $(desc).css('font-size', '8px');
              $(desc).css('height', '24px');
              cube.appendChild(content);
              cube.appendChild(desc);
              // cube.innerHTML = `${magicCode[i]}/${magicCode[j]}`;

              let count = 0;
              cube.addEventListener('click', (event) => {
                if (count === 0) {
                  emulateClick(frames[i], event);
                  $(left).css('background-position-y', magicActiveHeight[i]);
                } else {
                  emulateClick(frames[j], event);
                  $(right).css('background-position-y', magicActiveHeight[j]);
                }
                count++;
              })
              cheatTable.appendChild(cube);
            }
          }
          abilityPop[0].appendChild(cheatTable);
        }
      }
    }
    var magicObserver = new MutationObserver(magicObsCallback);
    magicObserver.observe(abilityPop[0], magicObsConfig);

    // 绑定敌人HP
    let enemies = stage.gGameStatus.boss.param;
    enemies.forEach((v, i) => {
      let hp = Number(v.hp);
      let hpmax = Number(v.hpmax);
      let hpbar = $(`#enemy-hp${i}`);
      hpbar.parent().children()[1].innerHTML = '';
      hpbar.parent().css('text-shadow', '0 0 1px #000000,0 0 1px #000000,0 0 1px #000000,0 0 1px #000000,0 0 1px #000000');
      hpbar.parent().css('color', 'white');
      hpbar.parent().css('font-size', '10px');
      hpbar.parent().css('padding', '7px 0 0 18px');
      hpbar.parent().css('text-align', 'center');
      hpbar.parent().removeClass('prt-enemy-percent');
      if (hp !== 0) {
        hpbar.parent().addClass('block');
      }

      function genHPText(hp, hpmax) {
        return `${genNum(hp)}/${genNum(hpmax)}(${Math.floor(hp / hpmax * 10000) / 100}%)`
      }

      hpbar.html(genHPText(hp, hpmax));
      Object.defineProperty(v, 'hp', {
        enumerable: true,
        configurable: true,
        set: function (newVal) {
          hp = newVal;
          if (hp === 0) hpbar.parent().removeClass('block');
          hpbar.html(genHPText(hp, hpmax));
        },
        get: function () {
          return hp;
        }
      })
    })
  })
}

function waitForGameStage(callback) {
  if (window.stage && stage.gGameStatus && stage.gGameStatus.boss && stage.gGameStatus.boss.param) {
    callback();
  } else {
    setTimeout(() => {
      waitForGameStage(callback);
    }, 100);
  }
}

function genNum(num) {
  //亿
  let oku = Math.floor(num / 100000000);
  num = num % 100000000;
  //万
  let man = Math.floor(num / 10000);
  num = num % 10000;

  return (oku > 0 ? `${oku}E` : '') + (man > 0 ? `${man}W` : (num === 0 ? '' : `${num}`));
}

module.exports = inject;
