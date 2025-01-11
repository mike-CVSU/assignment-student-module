import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { UpdateStudentDto } from './dto/create-student.dto';


@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new NotFoundException('Student Not Found');
    }
  
    const result = await this.studentRepository.update(id, updateStudentDto);
    
    
    return {
      message: 'Student updated successfully',
      affected: result.affected,  
      generatedMaps: result.generatedMaps, 
      raw: result.raw  
    };
  }
}
