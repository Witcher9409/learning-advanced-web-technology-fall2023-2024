import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ParseIntPipe,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
//import { UsersGuard } from './users.guard';
//import { MyInterceptor } from './users.interceptor';
import { User } from 'src/entities/user.entity';

@Controller('users')
//@UseInterceptors(MyInterceptor)
//@UseGuards(UsersGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get('/')
  getUsers(@Query('subString') subString: string): Promise<User[]> {
    if (subString) return this.userService.getUsers(subString);
    else return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findById(id);
  }



  @Post('')
  createUser(@Body(ValidationPipe) createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: []) {
    return { id, ...userUpdate };
  }
}
