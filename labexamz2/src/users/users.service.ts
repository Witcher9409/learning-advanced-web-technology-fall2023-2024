import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Like, Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) { }


  async findAll() {
    return await this.userRepo.find({});
  }

  async findById(id: number) {
    return await this.userRepo.find({ where: { id: id } });
  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.create(createUserDto);
    return await this.userRepo.save(user);
  }

  async getUsers(subString: string): Promise<User[]> {
    return await this.userRepo.find({
      where: { fullName: Like(`%${subString}%`) },
    });
  }
}
