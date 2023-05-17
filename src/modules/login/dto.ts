import { Role } from 'common/types/role';

export class LoginResDto {
  token: string;
  role: Role;
  fullName: string;
  email: string;
  key: string;
}

export class LoginReqDto {
  email: string;
  pwd: string;
}
