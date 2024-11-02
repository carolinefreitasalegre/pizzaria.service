import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProductPizzaDto } from '../dto/product-pizza.dto';

@Injectable()
export class GetAllProductsPizzasService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(): Promise<ProductPizzaDto[]> {
    return this.prismaService.pizza.findMany();
  }
}
