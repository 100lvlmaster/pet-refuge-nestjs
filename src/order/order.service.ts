import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';

@Injectable()
export class OrderService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createOrderInput: CreateOrderInput) {
    return this.prismaService.orders.create({ data: createOrderInput });
  }

  findAll() {
    return this.prismaService.orders.findMany();
  }
  findUserOrders(userId: string) {
    return this.prismaService.orders.findMany({ where: { userId: userId } });
  }
  findOne(id: string) {
    return this.prismaService.orders.findFirst({ where: { id: id } });
  }

  update(id: string, updateOrderInput: UpdateOrderInput) {
    return this.prismaService.orders.update({
      where: { id: id },
      data: updateOrderInput,
    });
  }

  remove(id: string) {
    return this.prismaService.orders.delete({ where: { id: id } });
  }
}
