/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class carts {
   
       
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pid: number;

  

  // Define many-to-one relationship with User entity
  @ManyToOne(() => User, user => user.cart)
  user: User;

  @Column({ nullable: true })
  userId: number; 
  //  jobPost: { id: number; };
    //file: string;

    
}