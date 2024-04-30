import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { UpdateUserProfileDto } from './dto/update-user-profile.dto';

import { UsersService } from 'src/users/users.service';

@Controller('user-profile')
export class UserProfileController {
  constructor(
    private readonly userProfileService: UserProfileService,
 
    private readonly usersService: UsersService
  ) { }

  @Post()
  create(@Body() createUserProfileDto: CreateUserProfileDto) {
    return this.userProfileService.create(createUserProfileDto);
  }

  // @Get(':userId/profile')
  // getposts(@Param('userId') userId: number){
  //   const deets = this.usersService.findOne(userId);
  //   const userposts = this.postsService.getPostsByUser(userId);
  //   return { deets, userposts };
  // }
  @Get(':userId/profile')
  async getposts(@Param('userId') userId: number) {
    try {
      const userDeets = await this.usersService.findOne2(userId);
     
      
    } catch (error) {
      console.error(error);
      throw new InternalServerErrorException('Failed to retrieve user profile and posts.');
    }
  }

}
