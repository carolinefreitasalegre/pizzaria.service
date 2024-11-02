import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProductDrinkDto } from '../dto/product-drinks.dto';

@Injectable()
export class GetAllProductsDrinksService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(): Promise<ProductDrinkDto[]> {
    return this.prismaService.pizza.findMany();
  }
}
