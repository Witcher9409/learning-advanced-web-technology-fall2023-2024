import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { UserProfile } from './user-profile.entity';



@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ name: 'id', type: "int" })
  id: number;



  @Column({ name: 'userName', type: 'varchar', length: 100, unique: true, nullable: false })
  userName: string;

  @Column({ name: 'email', unique: true, nullable: false })
  email: string;

  @Column({ name: 'password', nullable: false })
  password: string;



  @OneToOne(() => UserProfile, userprofile => userprofile.user)
  userprofile: UserProfile;
  product: any;
  cart: any;


}
