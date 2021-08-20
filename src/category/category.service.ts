import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCategoryInput: CreateCategoryInput) {
    return this.prisma.category.create({ data: createCategoryInput });
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  findOne(id: string) {
    return this.prisma.category.findFirst({ where: { id: id } });
  }
  findById(id: string) {
    return this.prisma.category.findMany({ where: { id: id } });
  }
  update(id: string, updateCategoryInput: UpdateCategoryInput) {
    return this.prisma.category.update({
      where: { id: id },
      data: updateCategoryInput,
    });
  }

  remove(id: string) {
    return this.prisma.category.delete({ where: { id: id } });
  }
}
