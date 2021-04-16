import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'

@Controller('app')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('name')
  getName(): string {
    return this.appService.name()
  }

  @Get('version')
  getVersion(): string {
    return this.appService.version()
  }

  @Get('author')
  getAuthor(): string {
    return this.appService.author()
  }
}
