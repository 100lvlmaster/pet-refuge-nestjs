import { PrismaModule } from '../prisma/prisma.module';
import { UserResolver } from './user.resolver';
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PasswordService } from '../auth/password.service';

@Module({
  imports: [PrismaModule],
  providers: [UserResolver, UserService, PasswordService],
})
export class UserModule {}
