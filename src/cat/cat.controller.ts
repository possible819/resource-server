import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Cat } from './cat.entity'
import { CatService } from './cat.service'

@Controller('cats')
export class CatController {
  constructor(private catService: CatService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return await this.catService.findAll()
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Cat> {
    return await this.catService.findById(id)
  }

  @Post()
  async create(@Body() cat: Partial<Cat>): Promise<Cat> {
    return await this.catService.create(cat)
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() patch: Partial<Cat>,
  ): Promise<Cat> {
    return await this.catService.update(id, patch)
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.catService.delete(id)
  }
}
