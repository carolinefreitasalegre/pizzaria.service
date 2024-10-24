import { Module } from '@nestjs/common';
import { PizzariaModule } from './app/pizzaria.module';

@Module({
  imports: [PizzariaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
