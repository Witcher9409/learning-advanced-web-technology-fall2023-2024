/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class products {
   
       
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pname: string;

  @Column()
  description: string;

  // Define many-to-one relationship with User entity
  @ManyToOne(() => User, user => user.product)
  user: User;

  @Column({ nullable: true })
  userId: number; 
  //  jobPost: { id: number; };
    //file: string;

    
}