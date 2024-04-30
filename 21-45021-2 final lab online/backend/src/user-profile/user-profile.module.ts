import { Module } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfileController } from './user-profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from 'src/entities/user-profile.entity';
import { User } from 'src/entities/user.entity';

import { UsersService } from 'src/users/users.service';


@Module({
  imports: [ TypeOrmModule.forFeature([UserProfile, User])],
  controllers: [UserProfileController],
  providers: [UserProfileService, UsersService],
})
export class UserProfileModule { }
