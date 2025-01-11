import { Controller, Body, Param, Put } from '@nestjs/common';
import { StudentsService } from './students.service';
import { UpdateStudentDto } from './dto/create-student.dto';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

 

  @Put(':id')
async update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
  const result = await this.studentsService.update(+id, updateStudentDto);
  return result;  
}

  
}
