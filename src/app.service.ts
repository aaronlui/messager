import { Injectable } from '@nestjs/common';

const tempObj = {};

@Injectable()
export class AppService {
  sendMessage(token: string, str: string): string {
    if (!tempObj[token]) {
      tempObj[token] = [];
    }
    const messageList = tempObj[token];
    messageList.push({
      time: new Date().getTime(),
      text: str,
    });
    return str;
  }

  getMessage(token: string): any[] {
    return tempObj[token] || [];
  }

  cleanMessage(token: string): string {
    tempObj[token] = [];
    return 'clean message';
  }
}
