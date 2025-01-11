import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students/student.entity';
import { StudentsModule } from './students/students.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'srv1365.hstgr.io',
      port: 3306,
      username: 'u926624511_aquacheck',
      password: 'Aquacheck123',
      database: 'u926624511_db_aqua',
      entities: [Student],
      synchronize: true,
    }),StudentsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
