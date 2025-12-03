import type { AccountGenderEnum } from '../enums/AccountGenderEnum';

export interface RegisterRequest {
  email: string;
  password: string;
  username: string;
  name: string;
  gender?: AccountGenderEnum;
  dateOfBirth?: string;
}