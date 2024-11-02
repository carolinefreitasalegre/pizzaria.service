import { Module } from '@nestjs/common';
import { PizzaController } from './pizzaria.controller';
import { GetAllProductsService } from './get-products/getAllProducts.service';
import { AddProductPizzaService } from './add-products/add-product-pizza.service';
import { PrismaModule } from 'prisma/prisma.module';
import { AddProductDrinkService } from './add-products/add-product-drinks.service';
import { AddProductSnackService } from './add-products/add-product-snack.service';
import { GetAllProductsSnacksService } from './get-products/getAllSnacks.service';
import { GetAllProductsPizzasService } from './get-products/getAllPizzas.service';
import { GetAllProductsDrinksService } from './get-products/getAllDrinks.service';

@Module({
  imports: [PrismaModule],
  controllers: [PizzaController],
  providers: [
    GetAllProductsService,
    AddProductPizzaService,
    AddProductDrinkService,
    AddProductSnackService,
    GetAllProductsSnacksService,
    GetAllProductsPizzasService,
    GetAllProductsDrinksService
  ],
})
export class PizzariaModule {}
