import type { AccountRoleEnum } from '../enums/AccountRoleEnum';
import type { AccountStatusEnum } from '../enums/AccountStatusEnum';
import type { AccountProviderEnum } from '../enums/AccountProviderEnum';
import type { AccountGenderEnum } from '../enums/AccountGenderEnum';

export interface Account {
  id: number;
  username: string;
  email: string;
  name: string;
  picture?: string;
  gender?: AccountGenderEnum;
  dateOfBirth?: string; 
  phone?: string;
  address?: string;
  role: AccountRoleEnum;
  provider: AccountProviderEnum;
  status: AccountStatusEnum;
  createAt: string; 
}