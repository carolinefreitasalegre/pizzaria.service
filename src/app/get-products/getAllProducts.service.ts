import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma, PrismaClient } from '@prisma/client';
import { ProductPizzaDto } from '../dto/product-pizza.dto';

@Injectable()
export class GetAllProductsService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(): Promise<ProductPizzaDto[]> {
    return this.prismaService.pizza.findMany();
  }
}
