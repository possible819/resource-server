import { Injectable } from '@nestjs/common'
import { App } from 'src/app/interfaces/app.interface'
import { name, version, author } from '../../package.json'

@Injectable()
export class AppService {
  private readonly app: App = { name, version, author }

  info(): App {
    return this.app
  }

  name(): string {
    return this.app.name
  }

  version(): string {
    return this.app.version
  }

  author(): string {
    return this.app.author
  }
}
