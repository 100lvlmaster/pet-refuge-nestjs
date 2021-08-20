import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStoreInput } from './dto/create-store.input';
import { UpdateStoreInput } from './dto/update-store.input';

@Injectable()
export class StoreService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createStoreInput: CreateStoreInput) {
    return this.prismaService.store.create({ data: createStoreInput });
  }

  findAll() {
    return this.prismaService.store.findMany();
  }

  findOne(id: string) {
    return this.prismaService.store.findFirst({ where: { id: id } });
  }

  update(id: string, updateStoreInput: UpdateStoreInput) {
    return this.prismaService.store.update({
      where: { id: id },
      data: updateStoreInput,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} store`;
  }
}
