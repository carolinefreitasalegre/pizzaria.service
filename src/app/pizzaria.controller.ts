import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AddProductPizzaService } from './add-products/add-product-pizza.service';
import { ProductPizzaDto } from './dto/product-pizza.dto';
import { GetAllProductsService } from './get-products/getAllProducts.service';
import { AddProductDrinkService } from './add-products/add-product-drinks.service';
import { ProductDrinkDto } from './dto/product-drinks.dto';

@Controller('buona-pizzaria')
export class PizzaController {
  constructor(
    private readonly pizzaService: AddProductPizzaService, 
    private readonly getAllProducts: GetAllProductsService,
    private readonly drinkService: AddProductDrinkService
) {}

  @Get('todos-produtos')
  async GetAllProductsService(){
    return this.getAllProducts.execute()
  }


  @Post('administrador/adicionar-pizza')
  AddProductPizzaService(@Body() data: Prisma.PizzaCreateInput): Promise<ProductPizzaDto> {
    return this.pizzaService.execute({ ...data });
  }

  @Post('administrador/adicionar-bebida')
  AddProductDrinkService(@Body() data: Prisma.DrinkCreateInput): Promise<ProductDrinkDto> {
    return this.drinkService.execute({ ...data })
  }
  

}
