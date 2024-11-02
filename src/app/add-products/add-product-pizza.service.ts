import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { ProductPizzaDto } from '../dto/product-pizza.dto';

@Injectable()
export class AddProductPizzaService {
  constructor(private prisma: PrismaService) {}

  async execute(data: Prisma.PizzaCreateInput): Promise<ProductPizzaDto> {
    await this.prisma.pizza.create({ data });
    return;
  }
}
