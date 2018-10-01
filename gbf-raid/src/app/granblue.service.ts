import { Injectable } from '@angular/core';
declare var pluginHelper;
declare var io;

@Injectable({
  providedIn: 'root'
})
export class GranblueService {
  callback: (msg: any) => void;
  private socket;
  private tracking = '';
  constructor() {
    this.socket = io('http://player.aigis.me:8800');

    this.socket.on('raid-info', (msg) => {
      this.callback(msg);
    });

  }
  track(name: string, callback: (msg: any) => void) {
    if (this.tracking !== '') { this.untrack(this.tracking); }
    this.socket.emit('track', name);
    this.tracking = name;
    this.callback = callback;
  }
  untrack(name) {
    this.socket.emit('untrack', name);
    this.tracking = '';
  }

  joinRaid(id, callback) {
    if (pluginHelper) {
      pluginHelper.sendMessage({
        type: 'joinRaid',
        data: id
      }, (msg) => {
        if (callback) {
          callback(msg);
        }
      });
    }
  }

}
