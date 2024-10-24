import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AddProductPizzaService } from './add-products/add-product-pizza.service';
import { ProductPizzaDto } from './dto/product-pizza.dto';
import { GetAllProductsService } from './get-products/getAllProducts.service';

@Controller('buona-pizzaria')
export class PizzaController {
  constructor(
    private readonly pizzaService: AddProductPizzaService, 
    private readonly getAllProducts: GetAllProductsService
) {}

  @Get('todos-produtos')
  async GetAllProductsService(){
    return this.getAllProducts.execute()
  }


  @Post('administrador/adicionar-produto')
  AddProductPizzaService(@Body() data: Prisma.PizzaCreateInput): Promise<ProductPizzaDto> {
    return this.pizzaService.execute({ ...data });
  }

}
