import { Module } from '@nestjs/common';
import { PizzaController } from './pizzaria.controller';
import { GetAllProductsService } from './get-products/getAllProducts.service';
import { AddProductPizzaService } from './add-products/add-product-pizza.service';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PizzaController],
  providers: [GetAllProductsService, AddProductPizzaService],
})
export class PizzariaModule {}
