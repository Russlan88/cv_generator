import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PersonDocument, Person } from '../../schemas/person.schema';

@Injectable()
export class PersonService {
  constructor(
    @InjectModel(Person.name)
    private readonly personModel: Model<PersonDocument>,
  ) {}

  async getUserDetails(): Promise<Person[]> {
    return this.personModel.find().exec();
  }

  async create(personData: any): Promise<Person> {
    const createdPerson = new this.personModel(personData);
    return createdPerson.save();
  }

  async update(id: string, updateData: Partial<Person>): Promise<Person> {
    await this.personModel.findByIdAndUpdate(id, updateData).exec();
    return this.personModel.findById(id).exec();
  }

  async addCompetences(_id: string, competences: string[]): Promise<Person> {
    let person = await this.personModel.findById(_id).exec();
    if (!person) {
      throw new NotFoundException('Person not found');
    }

    for (const competence of competences) {
      if (!person.competenze.includes(competence)) {
        person.competenze.push(competence);
      }
    }
    return person.save();
  }

  async addWorkExperience(_id: string, workExperience: any): Promise<Person> {
    let person = await this.personModel.findById(_id).exec();
    if (!person) {
      throw new NotFoundException('Person not found');
    }
    person.esperienze_lavorative.push(workExperience);
    return person.save();
  }

  async deleteCompetence(_id: string, competence: string): Promise<Person> {
    let person = await this.personModel.findById(_id).exec();
    if (!person || !person.competenze.includes(competence)) {
      throw new NotFoundException('Competence not found for this person');
    }
    person.competenze = person.competenze.filter((comp) => comp !== competence);
    return person.save();
  }

  async updateWorkExperience(
    userId: string,
    expId: string,
    workExperience: any,
  ): Promise<Person> {
    let user = await this.personModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const experienceIndex = user.esperienze_lavorative.findIndex(
      (exp) => exp._id.toString() === expId,
    );

    if (experienceIndex === -1) {
      throw new NotFoundException('Work experience not found');
    }

    user.esperienze_lavorative[experienceIndex] = workExperience;
    return user.save();
  }

  async deleteWorkExperience(
    _id: string,
    experienceId: string,
  ): Promise<Person> {
    let person = await this.personModel.findById(_id).exec();
    if (!person) {
      throw new NotFoundException('Experience not found');
    }
    person.esperienze_lavorative = person.esperienze_lavorative.filter(
      (exp) => exp._id.toString() !== experienceId,
    );
    return person.save();
  }
}
