import { Injectable } from '@nestjs/common';
import { GetAllProductsPizzasService } from './getAllPizzas.service';
import { GetAllProductsSnacksService } from './getAllSnacks.service';
import { GetAllProductsDrinksService } from './getAllDrinks.service';
import { ProductDrinkDto } from '../dto/product-drinks.dto';
import { ProductPizzaDto } from '../dto/product-pizza.dto';
import { ProductSnackDto } from '../dto/product-snack.dto';

@Injectable()
export class GetAllProductsService {
  constructor(
    private readonly pizzaService: GetAllProductsPizzasService,
    private readonly sanackService: GetAllProductsSnacksService,
    private readonly drinksService: GetAllProductsDrinksService,
  ) {}

  async execute(): Promise<{
    drinks: ProductDrinkDto[];
    pizzas: ProductPizzaDto[];
    snacks: ProductSnackDto[];
  }> {
    const drinks = await this.drinksService.execute();
    const pizzas = await this.pizzaService.execute();
    const snacks = await this.sanackService.execute();

    return {
      drinks,
      pizzas,
      snacks,
    };
  }
}
