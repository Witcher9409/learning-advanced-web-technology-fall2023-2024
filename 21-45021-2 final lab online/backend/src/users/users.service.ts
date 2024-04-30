import { Injectable } from '@nestjs/common';
import { CreateUserDto, loginDTO } from './dto/create-user.dto';
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



  async addUser(myobj: CreateUserDto): Promise<Object> {
    return await this.userRepo.save(myobj);
  }
  async findOne(logindata: loginDTO): Promise<any> {
    return await this.userRepo.findOneBy({ email: logindata.email });
  }

  async getTotalUsers(): Promise<number> {
    return await this.userRepo.count();
  }

  async findOne2(id: number) {
    return await this.userRepo.findOne({ where: { id: id } });
  }



}


