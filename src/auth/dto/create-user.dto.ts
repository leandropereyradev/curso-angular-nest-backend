// Esta clase es la encargada de recibir los datos enviados desde el body
// a través de la petición de tipo POST

import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @MinLength(6)
  password: string;
}
