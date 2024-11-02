import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { ProductSnackDto } from '../dto/product-snack.dto';

@Injectable()
export class GetAllProductsSnacksService {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(): Promise<ProductSnackDto[]> {
    return this.prismaService.pizza.findMany();
  }
}
