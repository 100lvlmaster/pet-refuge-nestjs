import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}
  create(createProductInput: CreateProductInput) {
    return this.prisma.product.create({ data: createProductInput });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: string) {
    return this.prisma.product.findFirst({ where: { id: id } });
  }

  update(id: string, updateProductInput: UpdateProductInput) {
    return this.prisma.product.update({
      where: { id: id },
      data: updateProductInput,
    });
  }

  remove(id: string) {
    return this.prisma.product.delete({ where: { id: id } });
  }
}
