import {Controller, Get, Query} from '@nestjs/common';
import {RandomService} from './random.service';
import {ApiQuery, ApiResponse, ApiTags} from "@nestjs/swagger";
import {UserDto} from "./dto/user.dto";

@ApiTags('random')
@Controller('random')
export class RandomController {
  constructor(private readonly appService: RandomService) {
  }

  @Get('user')
  @ApiResponse({status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({status: 403, description: 'Forbidden.'})
  async randomUser(): Promise<UserDto> {
    return this.appService.randomUser();
  }

  @Get('search')
  @ApiResponse({status: 201, description: 'The record has been successfully created.'})
  @ApiResponse({status: 403, description: 'Forbidden.'})
  @ApiQuery({name: 'country'})
  async ransomUserQuery(@Query() query): Promise<string> {
    return this.appService.ransomUserQuery(query);
  }
}
