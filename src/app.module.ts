import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { PrismaService } from './prisma/prisma.service';
import { ProduceModule } from './product/products.module';

@Module({
  imports: [ProduceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
