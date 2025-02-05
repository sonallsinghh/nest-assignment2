import { ApiProperty } from '@nestjs/swagger';

export class RequestDTO {
  @ApiProperty()
  username: string;
  mobile: string;
  password: string;
  email: string;
}
