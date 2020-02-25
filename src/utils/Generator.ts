import {Injectable} from "@nestjs/common";
import {language} from "../mocks/language.mock";

@Injectable()
export class Generator {
  firstname;
  lastname;

  /**
   * Generate random Language
   */
  randomLanguage() {
    return language[Math.floor(Math.random() * language.length)]
  }

  /**
   * Generate random Firstname depending on the language
   * @param param
   */
  randomFirtname(param) {
    const data = require('../mocks/data/' + param + '/firstname.mock');
    const result = data.firstname[Math.floor(Math.random() * data.firstname.length)];
    this.firstname = result;
    return result;
  }

  /**
   * Generate random Lastname depending on the language
   * @param param
   */
  randomLastname(param) {
    const data = require('../mocks/data/' + param + '/lastname.mock');
    const result = data.lastname[Math.floor(Math.random() * data.lastname.length)];
    this.lastname = result;
    return result;
  }

  /**
   * Generate random Email
   */
  randomEmail() {
    return `${this.firstname.toLowerCase().replace(' ', '-')}.${this.lastname.toLowerCase().replace(' ', '-')}@exemple.com`;
  }

  /**
   * Generate random Country depending on the language
   * @param param
   */
  randomCountry(param) {
    const data = require('../mocks/data/' + param + '/country.mock');
    return data.country[Math.floor(Math.random() * data.country.length)]
  }

  /**
   * Generate random City depending on the language
   * @param param
   */
  randomCity(param) {
    const data = require('../mocks/data/' + param + '/city.mock');
    return data.city[Math.floor(Math.random() * data.city.length)]
  }

  /**
   * Generate random Street depending on the language
   * @param param
   */
  randomStreet(param) {
    const data = require('../mocks/data/' + param + '/street.mock');
    const number = Math.floor(Math.random() * 100);
    return `${number} ${data.street[Math.floor(Math.random() * data.street.length)]}`;
  }

  /**
   * Generate random ObjectId
   */
  generateObjectId() {
    const timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, () => {
      return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
  }

  /**
   * Generate random Uuid
   */
  generateUuid() {
    let dt = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
}
