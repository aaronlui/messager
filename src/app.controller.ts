import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

class Params {
  token: string;
  str: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('send/:token/:str')
  sendMessage(@Param() params: Params): string {
    return this.appService.sendMessage(params.token, params.str);
  }

  @Get('receive/:token')
  getMessage(@Param() params: Params): any[] {
    return this.appService.getMessage(params.token);
  }

  @Get('clean/:token')
  cleanMessage(@Param() params: Params): string {
    return this.appService.cleanMessage(params.token);
  }
}
