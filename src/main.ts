import { INestApplication } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const CONFIG: Record<string, any> = {
  PORT: 3000,
}

const bootstrap = async (): Promise<void> => {
  const app: INestApplication = await NestFactory.create(AppModule)
  await app.listen(CONFIG.PORT)
  console.log(`Server is running on ${CONFIG.PORT}`)
}

bootstrap()
