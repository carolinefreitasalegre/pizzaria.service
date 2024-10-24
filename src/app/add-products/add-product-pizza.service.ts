import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { ProductPizzaDto } from '../dto/product-pizza.dto';

@Injectable()
export class AddProductPizzaService {
  constructor(private prisma: PrismaService) {}

  async execute(data: Prisma.PizzaCreateInput): Promise<ProductPizzaDto> {
    const dados = await this.prisma.pizza.create({
      data: {
        sabor: data.sabor,
        quantidade: data.quantidade,
        valor: data.valor,
      },
    });
    console.log(dados);
    return;
  }
}
