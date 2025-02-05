import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
    @ApiProperty()
    username: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}