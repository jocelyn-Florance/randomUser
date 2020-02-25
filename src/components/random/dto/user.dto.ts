import {ApiProperty} from '@nestjs/swagger';

export class UserDto {
  @ApiProperty()
  readonly _id: string;
  @ApiProperty()
  readonly age: number;
  @ApiProperty()
  readonly firstname: string;
  @ApiProperty()
  readonly lastname: string;
  @ApiProperty()
  readonly email: string;
  @ApiProperty()
  readonly phone: number;
  @ApiProperty()
  readonly address: {
    street: string,
    city: string,
    country: string,
  };
  readonly login: {
    uuid: string,
    username: string,
    password: string,
    registered: Date,
  };
  readonly picture: {
    large: string,
    medium: string,
    small: string,
    thumbnail: string,
  };
}
