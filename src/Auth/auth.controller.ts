import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { AppService } from '../Auth/auth.service';
import { RequestDTO } from '..//request.dto';
import { LoginDTO } from '..//login.dto';
import { ApiBody } from '@nestjs/swagger';

@Controller('SignUp')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('signup')
  @ApiBody({ type: RequestDTO })
  async signUp(
    @Body('username') username: string,
    @Body('mobile') mobile: string,
    @Body('password') password: string,
    @Body('email') email: string,
  ) {
    return await this.appService.signUpUser(username, mobile, password, email);
  }

  @Post('login')
  @ApiBody({ type: LoginDTO })
  async login(@Body() loginDTO: LoginDTO) {
    return await this.appService.loginUser(
      loginDTO.username,
      loginDTO.email,
      loginDTO.password,
    );
  }
}
