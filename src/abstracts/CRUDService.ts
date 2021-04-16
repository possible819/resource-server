import { Connection, DeepPartial, EntityTarget, Repository } from 'typeorm'

export abstract class CRUDService<T> {
  private entityTarget: EntityTarget<T>
  private conn: Connection

  constructor(entityTarget: EntityTarget<T>, connection: Connection) {
    this.entityTarget = entityTarget
    this.conn = connection
  }

  get repository(): Repository<T> {
    return this.conn.getRepository<T>(this.entityTarget)
  }

  async findAll(): Promise<T[]> {
    return this.repository.find()
  }

  async findById(id: number | string): Promise<T> {
    return this.repository.findOne(id)
  }

  async create(record: DeepPartial<T>): Promise<T> {
    return await this.repository.save(record)
  }

  async update(id: number | string, patch: DeepPartial<T>): Promise<T> {
    const record: T = await this.findById(id)
    return await this.repository.save(Object.assign(record, patch))
  }

  async delete(id: number | string): Promise<void> {
    await this.repository.delete(id)
  }
}
