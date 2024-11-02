import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { AddProductPizzaService } from './add-products/add-product-pizza.service';
import { ProductPizzaDto } from './dto/product-pizza.dto';
import { GetAllProductsService } from './get-products/getAllProducts.service';
import { AddProductDrinkService } from './add-products/add-product-drinks.service';
import { ProductDrinkDto } from './dto/product-drinks.dto';
import { ProductSnackDto } from './dto/product-snack.dto';
import { AddProductSnackService } from './add-products/add-product-snack.service';
import { GetAllProductsPizzasService } from './get-products/getAllPizzas.service';
import { retry } from 'rxjs';
import { GetAllProductsDrinksService } from './get-products/getAllDrinks.service';
import { GetAllProductsSnacksService } from './get-products/getAllSnacks.service';

@Controller('buona-pizzaria')
export class PizzaController {
  constructor(
    private readonly getAllProducts: GetAllProductsService,
    private readonly getAllProductsPizzas: GetAllProductsPizzasService,
    private readonly getAllProductsDrinks: GetAllProductsDrinksService,
    private readonly getAllProductsSnacks: GetAllProductsSnacksService,
    private readonly pizzaService: AddProductPizzaService, 
    private readonly drinkService: AddProductDrinkService,
    private readonly snackService: AddProductSnackService
) {}

  @Get('todos-produtos')
  async GetAllProductsService(){
    return await this.getAllProducts.execute()
  }

  @Get('pizzas')
  async GetAllProductsPizzas(){
    return await this.getAllProductsPizzas.execute()
  }

  @Get('bebidas')
  async GetAllProductsDrinks(){
    return await this.getAllProductsDrinks.execute()
  }

  @Get('lanches')
  async GetAllProductsSnacks(){
    return await this.getAllProductsSnacks.execute()
  }

  @Post('administrador/adicionar-pizza')
  async AddProductPizzaService(@Body() data: Prisma.PizzaCreateInput): Promise<ProductPizzaDto> {
    return await this.pizzaService.execute({ ...data });
  }

  @Post('administrador/adicionar-bebida')
  async AddProductDrinkService(@Body() data: Prisma.DrinkCreateInput): Promise<ProductDrinkDto> {
    return await this.drinkService.execute({ ...data })
  }
  
  @Post('administrador/adicionar-lanche')
  async AddProductSnackService(@Body() data: Prisma.SnackCreateInput): Promise<ProductSnackDto> {
    return await this.snackService.execute({ ...data })
  }

}
