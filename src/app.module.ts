import { Module } from '@nestjs/common';
import { RandomController } from './components/random/random.controller';
import { RandomService } from './components/random/random.service';
import {Generator} from "./utils/Generator";

@Module({
  imports: [],
  controllers: [RandomController],
  providers: [RandomService, Generator],
})
export class AppModule {}
