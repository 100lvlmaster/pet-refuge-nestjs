import { Module } from '@nestjs/common';
import { OrderResolver } from './order.resolver';

@Module({
  imports: [],
  providers: [OrderResolver],
})
export class OrderModule {}
