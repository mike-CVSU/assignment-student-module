import { Entity, Column, PrimaryGeneratedColumn, IntegerType, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity({name: 'Student'})
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: false})
  firstName: string;

  @Column({nullable: false})
  lastName: string;

  @Column({nullable: false, unique: true})
  email: string;

  @Column({type: 'date', nullable: false})
  enrollmentDate: Date;

  @CreateDateColumn({type: 'timestamp'})
  timeStamp: Date;

  @UpdateDateColumn({type: 'timestamp'})
  updateStamp: Date;
}