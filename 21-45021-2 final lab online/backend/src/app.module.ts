import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';


import { AuthModule } from './users/auth/auth.module';


import { productModule } from './product/product.module';
import { cartModule } from './cart/cart.module';

import { UserProfileModule } from './user-profile/user-profile.module';
import { AdminModule } from './admin/admin.module';
import { AuthAdminModule } from './admin/authAdmin/authAdmin.module';


@Module({
  imports: [UsersModule, AuthModule, UserProfileModule, productModule, AdminModule, cartModule, AuthAdminModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
