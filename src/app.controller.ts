import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddProductPizzaService } from './app/add-products/add-product-pizza.service';
import { Prisma } from '@prisma/client';
import { GetAllProductsService } from './app/get-products/getAllProducts.service';

@Controller('buona-pizzaria')
export class app {
}
