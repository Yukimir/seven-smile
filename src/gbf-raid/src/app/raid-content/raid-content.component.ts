import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';
import { NzMenuItemDirective, NzMessageService } from 'ng-zorro-antd';

import { GranblueService } from '../granblue.service';
import { Raid } from './raid.model';

const options = [
  {
    value: '1.0',
    label: ' 1.0 方阵',
    children: [
      {
        value: 'Lv70 コロッサス・マグナ',
        label: '高达（火）',
        isLeaf: true
      }, {
        value: 'Lv60 ユグドラシル・マグナ',
        label: '鱼骨鱼骨（土）',
        isLeaf: true
      }, {
        value: 'Lv75 セレスト・マグナ',
        label: '瑟雷斯特（暗）',
        isLeaf: true
      }, {
        value: 'Lv75 シュヴァリエ・マグナ',
        label: '修瓦利耶（光）',
        isLeaf: true
      }, {
        value: 'Lv60 リヴァイアサン・マグナ',
        label: '利维坦（水）',
        isLeaf: true
      }, {
        value: 'Lv50 ティアマト・マグナ＝エア',
        label: '提亚马特（风)',
        isLeaf: true
      }
    ]
  },
  {
    value: '1.0 HL',
    label: '【HL】1.0 方阵',
    children: [
      {
        value: 'Lv100 コロッサス・マグナ',
        label: '高达（火）',
        isLeaf: true
      }, {
        value: 'Lv100 ユグドラシル・マグナ',
        label: '鱼骨鱼骨（土）',
        isLeaf: true
      }, {
        value: 'Lv100 セレスト・マグナ',
        label: '瑟雷斯特（暗）',
        isLeaf: true
      }, {
        value: 'Lv100 シュヴァリエ・マグナ',
        label: '修瓦利耶（光）',
        isLeaf: true
      }, {
        value: 'Lv100 リヴァイアサン・マグナ',
        label: '利维坦（水）',
        isLeaf: true
      }, {
        value: 'Lv100 ティアマト・マグナ＝エア',
        label: '提亚马特（风)',
        isLeaf: true
      }
    ]
  },
  {
    value: 'zoe',
    label: '邂逅，调停之翼',
    children: [
      {
        value: 'Lv100 フラム＝グラス',
        label: '双子（火）',
        isLeaf: true
      }, {
        value: 'Lv100 メドゥーサ',
        label: '美杜莎（土）',
        isLeaf: true
      }, {
        value: 'Lv100 Dエンジェル・オリヴィエ',
        label: 'D天（暗）',
        isLeaf: true
      }, {
        value: 'Lv100 アポロン',
        label: '阿波罗（光）',
        isLeaf: true
      }, {
        value: 'Lv100 マキュラ・マリウス',
        label: '冰皇（水）',
        isLeaf: true
      }, {
        value: 'Lv100 ナタク',
        label: '哪吒（风)',
        isLeaf: true
      }
    ]
  },
  {
    value: 'HL zoe',
    label: '【HL】邂逅·调停之翼',
    children: [
      {
        value: 'Lv120 フラム＝グラス',
        label: '双子（火）',
        isLeaf: true
      }, {
        value: 'Lv120 メドゥーサ',
        label: '美杜莎（土）',
        isLeaf: true
      }, {
        value: 'Lv120 Dエンジェル・オリヴィエ',
        label: 'D天（暗）',
        isLeaf: true
      }, {
        value: 'Lv120 アポロン',
        label: '阿波罗（光）',
        isLeaf: true
      }, {
        value: 'Lv120 マキュラ・マリウス',
        label: '冰皇（水）',
        isLeaf: true
      }, {
        value: 'Lv120 ナタク',
        label: '哪吒（风)',
        isLeaf: true
      }
    ]
  },
  {
    value: 'UB',
    label: '神击·究极之龙',
    children: [
      {
        value: 'Lv100 アテナ',
        label: '雅典娜（火）',
        isLeaf: true
      }, {
        value: 'Lv100 バアル',
        label: '巴尔（土）',
        isLeaf: true
      }, {
        value: 'Lv100 リッチ',
        label: '巫妖（暗）',
        isLeaf: true
      }, {
        value: 'Lv100 オーディン',
        label: '奥丁（光）',
        isLeaf: true
      }, {
        value: 'Lv100 グラニ',
        label: '古拉尼（水）',
        isLeaf: true
      }, {
        value: 'Lv100 ガルーダ',
        label: '迦楼罗（风)',
        isLeaf: true
      }
    ]
  },
  {
    value: 'bigHorse',
    label: '大马',
    children: [
      {
        value: 'Lv120 プロメテウス',
        label: '火',
        isLeaf: true
      }, {
        value: 'Lv120 ギルガメッシュ',
        label: '土',
        isLeaf: true
      }, {
        value: 'Lv120 アヌビス',
        label: '暗',
        isLeaf: true
      }, {
        value: 'Lv120 ヘクトル',
        label: '光',
        isLeaf: true
      }, {
        value: 'Lv120 カー・オン',
        label: '水',
        isLeaf: true
      }, {
        value: 'Lv120 バイヴカハ',
        label: '风',
        isLeaf: true
      }
    ]
  },
  {
    value: '2.0 ',
    label: '2.0 方阵',
    children: [
      {
        value: 'Lv120 シヴァ',
        label: '湿婆（火）',
        isLeaf: true
      }, {
        value: 'Lv120 ゴッドガード・ブローディア',
        label: '神盾（土）',
        isLeaf: true
      }, {
        value: 'Lv120 アバター',
        label: '化身（暗）',
        isLeaf: true
      }, {
        value: 'Lv120 メタトロン',
        label: '梅塔特隆（光）',
        isLeaf: true
      }, {
        value: 'Lv120 エウロペ',
        label: '欧罗巴（水）',
        isLeaf: true
      }, {
        value: 'Lv120 グリームニル',
        label: '军神（风）',
        isLeaf: true
      }
    ]
  },
  {
    value: 'tenshi',
    label: '天司',
    children: [
      {
        value: 'Lv100 ミカエル',
        label: '米迦勒（火）',
        isLeaf: true
      }, {
        value: 'Lv100 ウリエル',
        label: '乌列（土）',
        isLeaf: true
      }, {
        value: 'Lv100 ガブリエル',
        label: '加百列（水）',
        isLeaf: true
      }, {
        value: 'Lv100 ラファエル',
        label: '拉斐尔（风）',
        isLeaf: true
      }
    ]
  }, {
    value: 'PT B',
    label: '原型巴哈姆特',
    children: [
      {
        value: 'Lv100 プロトバハムート',
        label: '普通难度',
        isLeaf: true
      }, {
        value: 'Lv150 プロトバハムート',
        label: 'HL难度',
        isLeaf: true
      }
    ]
  }, {
    value: 'U B',
    label: '究极巴哈姆特',
    children: [
      {
        value: 'Lv150 アルティメットバハムート',
        label: '普通难度',
        isLeaf: true
      }, {
        value: 'Lv200 アルティメットバハムート',
        label: 'HL难度',
        isLeaf: true
      }
    ]
  }, {
    value: 'Lv100 ジ・オーダー・グランデ',
    label: '秩序大公',
    isLeaf: true
  }, {
    value: 'Lv110 ローズクイーン',
    label: '女高中生',
    isLeaf: true
  }, {
    value: 'Lv100 黒麒麟',
    label: '黑麒麟',
    isLeaf: true
  }, {
    value: 'Lv100 黄龍',
    label: '黄龙',
    isLeaf: true
  }
];

@Component({
  selector: 'app-raid-content',
  templateUrl: './raid-content.component.html',
  styleUrls: ['./raid-content.component.css']
})
export class RaidContentComponent implements OnInit {
  selectedRaid = '';
  nzOptions = options;
  raidList: Raid[] = [];
  constructor(
    private granblueService: GranblueService,
    private message: NzMessageService
  ) {

  }

  ngOnInit() {
  }

  onSelectionChange(selectedOptions: any[]): void {
    const selected = selectedOptions.pop();
    this.selectedRaid = selected.value;
    this.raidList = [];
    this.granblueService.track(this.selectedRaid, (msg: Raid) => {
      this.raidList = [msg].concat(this.raidList);
      this.raidList = this.raidList.slice(0, 20);
    });
  }
  selectRaid(raid: Raid, index: number) {
    this.granblueService.joinRaid(raid.ID, (msg) => {
      console.log(msg);
      if (msg.battle_point_check === false) {
        this.message.error('加入副本失败【BP不足】');
      }
      if (msg.popup && msg.popup.body) {
        this.message.error(`加入副本失败【${msg.popup.body}】`);
      }
    });
  }
  clearSelect() {
    if (this.selectedRaid) {
      this.granblueService.untrack(this.selectedRaid);
      this.selectedRaid = '';
      this.raidList = [];
    }
  }
}
