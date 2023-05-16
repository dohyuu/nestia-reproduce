import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { TypedRoute } from '@nestia/core';
import { Post, User } from '@prisma/client';

@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}

  /**
   * Maximum call stack size exceeded
   */
  @TypedRoute.Get()
  callStackExceeded(): User[] {
    return [];
  }

  /**
   * Ok
   */
  @TypedRoute.Get()
  noProblem(): Post[] {
    return [];
  }
}
