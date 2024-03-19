import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'id', type: "int" })
  id: number;

  @Column({ name: 'fullName', type: 'varchar', length: 150, nullable: false })
  fullName: string;

  @Column({ name: 'userName', type: 'varchar', length: 100, unique: true, nullable: false })
  userName: string;

  @Column({ name: 'email', unique: true, nullable: false })
  email: string;

  @Column({ name: 'password', nullable: false })
  password: string;

  @Column({ name: 'confirmpassword', type: 'varchar', length: 150, nullable: false })
  confirmpassword: string;

  @Column({ name: 'address', type: 'varchar', length: 150, nullable: false })
  address: string;

  @Column({ name: 'companyname', type: 'varchar', length: 150, nullable: false })
  companyname: string;

  @Column({ name: 'phonenumber', type: 'varchar', length: 150, nullable: false })
  phonenumber: string;

  @Column({ name: 'city', type: 'varchar', length: 150, nullable: false })
  city: string;

  @Column({ name: 'country', type: 'varchar', length: 150, nullable: false })
  country: string;

  

  @BeforeInsert()
  async HashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
