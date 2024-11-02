import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { ProductSnackDto } from '../dto/product-snack.dto';

@Injectable()
export class AddProductSnackService {
  constructor(private prisma: PrismaService) {}

  async execute(data: Prisma.SnackCreateInput): Promise<ProductSnackDto> {
    await this.prisma.snack.create({ data });
    return;
  }
}
