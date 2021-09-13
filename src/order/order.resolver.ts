import {
  Resolver,
  Query,
  Mutation,
  Args,
  ID,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Order, Status } from './entities/order.entity';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { PrismaService } from 'nestjs-prisma';

@Resolver(() => Order)
export class OrderResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Mutation(() => Order)
  createOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    const input = { ...createOrderInput, status: Status.CART };
    return this.prisma.orders.create({ data: input });
  }

  @Query(() => [Order], { name: 'orders' })
  findAll() {
    return this.prisma.orders.findMany();
  }
  @Query(() => [Order], { name: 'orders' })
  userOrders(@Args('id', { type: () => ID }) id: string) {
    return this.prisma.orders.findMany({ where: { userId: id } });
  }

  @Query(() => Order, { name: 'order' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.prisma.orders.findFirst({ where: { id: id } });
  }

  @Mutation(() => Order)
  updateOrder(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.prisma.orders.update({
      where: { id: updateOrderInput.id },
      data: { ...updateOrderInput },
    });
  }

  @Mutation(() => Order)
  removeOrder(@Args('id', { type: () => ID }) id: string) {
    return this.prisma.orders.delete({ where: { id: id } });
  }

  @ResolveField('product')
  product(@Parent() order: Order) {
    const { productId } = order;
    return this.prisma.product.findFirst({ where: { id: productId } });
  }
}
