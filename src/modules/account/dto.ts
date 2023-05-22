import { Role } from 'common/types/role';

export class LoginResDto {
    token: string;
    role: Role;
    fullName: string;
    email: string;
    key: string;
}

export class CreateAccount {
    loginId: string;
    email: string;
    initialPassword: string;
    familyNameFirst: string;
    familyNameLast: string;
    furiganaNameFirst: string;
    furiganaNameLast: string;
}