import { Injectable } from '@nestjs/common'
import { CRUDService } from 'src/abstracts/CRUDService'
import { Connection } from 'typeorm'
import { Cat } from './cat.entity'

@Injectable()
export class CatService extends CRUDService<Cat> {
  constructor(private connection: Connection) {
    super(Cat, connection)
  }
}
