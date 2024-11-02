import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProductDrinkDto } from '../dto/product-drinks.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class AddProductDrinkService {
  constructor(private prisma: PrismaService) {}

  async execute(data: Prisma.DrinkCreateInput): Promise<ProductDrinkDto> {
    await this.prisma.drink.create({ data });
    return;
  }
}
