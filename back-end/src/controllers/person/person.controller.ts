import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from '../../dto/create-person.dto';
import { Person } from '../../schemas/person.schema'; // Assuming you've a Mongoose schema named person.schema.ts

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  async getAll(): Promise<Person[]> {
    return this.personService.getUserDetails();
  }

  @Post()
  async create(@Body() personData: CreatePersonDto): Promise<Person> {
    return this.personService.create(personData);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateData: Partial<CreatePersonDto>,
  ): Promise<Person> {
    return this.personService.update(id, updateData);
  }

  @Patch(':id/addCompetences')
  async addCompetences(
    @Param('id') id: string,
    @Body('competences') competences: string[],
  ) {
    return this.personService.addCompetences(id, competences);
  }

  @Delete(':id/remove-competence/:competence')
  removeCompetence(
    @Param('id') userId: string,
    @Param('competence') competence: string,
  ) {
    return this.personService.deleteCompetence(userId, competence);
  }

  @Patch(':id/addWorkExperience')
  async addWorkExperience(
    @Param('id') id: string,
    @Body() workExperience: CreatePersonDto,
  ) {
    return this.personService.addWorkExperience(id, workExperience);
  }

  @Patch(':id/update-experience/:experienceId')
  async updateWorkExperience(
    @Param('id') userId: string,
    @Param('experienceId') expId: string,
    @Body() workExperience: CreatePersonDto,
  ): Promise<Person> {
    return this.personService.updateWorkExperience(
      userId,
      expId,
      workExperience,
    );
  }

  @Delete(':id/remove-experience/:experienceId')
  removeExperience(
    @Param('id') userId: string,
    @Param('experienceId') expId: string,
  ) {
    return this.personService.deleteWorkExperience(userId, expId); // Removed parseInt here
  }
}
