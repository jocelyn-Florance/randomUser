import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UserDto} from "./dto/user.dto";
import {Generator} from "../../utils/Generator";

@Injectable()
export class RandomService {
  firstname;
  lastname;
  country;
  city;

  constructor(private readonly randomUtil: Generator) {
  }

  async randomUser(): Promise<UserDto> {
    const language = this.randomUtil.randomLanguage();
    return this.userData(language);
  }

  async ransomUserQuery(query: any): Promise<any> {
    const data = require('../../mocks/language.mock');
    const result = data.language.indexOf(query.country);
    if (result < 0) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    return this.userData(query.country);
  }

  async userData(param): Promise<UserDto> {
    return {
      _id: this.randomUtil.generateObjectId(),
      age: Math.floor(Math.random() * 100),
      firstname: this.randomUtil.randomFirtname(param),
      lastname: this.randomUtil.randomLastname(param),
      email: this.randomUtil.randomEmail(),
      phone: Math.floor(Math.random() * 100000000000),
      address: {
        street: this.randomUtil.randomStreet(param),
        city: this.randomUtil.randomCity(param),
        country: this.randomUtil.randomCountry(param)
      },
      login: {
        uuid: this.randomUtil.generateUuid(),
        username: this.randomUtil.randomFirtname(param),
        password: Math.random().toString(36).slice(-8),
        registered: new Date(),
      },
      picture: {
        large: "http://placehold.it/32x32",
        medium: "http://placehold.it/80x80",
        small: "http://placehold.it/16x16",
        thumbnail: "http://placehold.it/160x160"
      },
    };
  }
}
