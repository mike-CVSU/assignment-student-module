import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

 

  async remove(id: number) {
    const student = await this.studentRepository.findOneBy({ id });
    if(!student){
      throw new NotFoundException('Student Not Found');
    }
    return await this.studentRepository.remove(student);
  }
}
